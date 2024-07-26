const router = require("express").Router();
const { Artist, validate } = require("../models/artist");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");
const admin = require("../middleware/admin");
const { Song } = require("../models/song");

const PINATA_JWT = process.env.PINATA_JWT;
const PINATA_API = process.env.PINATA_API;

// Function to empty uploads folder
function emptyUploadsFolder() {
  const uploadDir = path.join(__dirname, "../uploads");

  const files = fs.readdirSync(uploadDir);

  files.forEach((file) => {
    const filePath = path.join(uploadDir, file);
    fs.unlinkSync(filePath);
  });
}
// Ensure the 'uploads' directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
//multer code to upload file from uploads folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

//create artist
router.post("/", admin, upload.single("img"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //upload image to pinata
  try {
    let formData = new FormData();
    const filepath = req.file.path;
    const readStream = fs.createReadStream(filepath);
    formData.append("file", readStream);

    const response = await axios.post(PINATA_API, formData, {
      headers: {
        ...formData.getHeaders(),
        Authorization: `Bearer ${PINATA_JWT}`,
      },
    });
    const pinataResponse = response.data;
    const imgHash = pinataResponse.IpfsHash;

    // Create artist with image hash
    const artist = await Artist.create({ ...req.body, img: imgHash });
    fs.unlinkSync(filepath);
    emptyUploadsFolder();
    res
      .status(201)
      .send({ data: artist, message: "Artist created successfully" });
  } catch (error) {
    console.error("Error creating artist:", error);
    res.status(500).send({ message: "Failed to create artist" });
  }
});

// Get all artists
router.get("/", async (req, res) => {
  try {
    const artists = await Artist.find().populate("songs");
    res.status(200).send({ data: artists });
  } catch (error) {
    console.error("Error fetching artists:", error);
    res.status(500).send({ message: "Failed to fetch artists" });
  }
});
// get artist by id
router.get("/:id", async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id).populate("songs");
    res.status(200).send({ data: artist });
  } catch (error) {
    console.error("Error fetching artist in routes: ", error);
  }
});

// Update artist
router.put("/:id", admin, async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }
    res
      .status(200)
      .send({ data: artist, message: "Artist updated successfully" });
  } catch (error) {
    console.error("Error updating artist:", error);
    res.status(500).send({ message: "Failed to update artist" });
  }
});

// Delete artist
router.delete("/:id", admin, async (req, res) => {
  try {
    const songs = await Artist.findById(req.params.id).select({ songs: 1 });
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (songs) {
      const deleteSongs = await Song.deleteMany({ _id: { $in: songs.songs } });
    }
    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }
    res.status(200).send({ message: "Artist deleted successfully" });
  } catch (error) {
    console.error("Error deleting artist:", error);
    res.status(500).send({ message: "Failed to delete artist" });
  }
});

//Get songs by artist id
router.get("/songs/:id", async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id).populate("songs");
    const songs = artist.songs;
    res.status(200).send({ data: songs });
  } catch (error) {
    console.error("Error in fetching songs of artist: ", error);
    res.status(500).send({ message: "Error in fetching songs" });
  }
});

module.exports = router;
