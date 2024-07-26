const router = require("express").Router();
const { Song, validate } = require("../models/song");
const { Artist } = require("../models/artist");
const admin = require("../middleware/admin");
const { User } = require("../models/user");
const { ObjectId } = require("mongodb");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");

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

// Create song
router.post(
  "/",
  admin,
  upload.fields([
    { name: "song", maxCount: 1 },
    { name: "img", maxCount: 1 },
  ]),
  async (req, res) => {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    try {
      // Upload song file to Pinata
      const songFile = req.files["song"][0];
      let formData = new FormData();
      formData.append("file", fs.createReadStream(songFile.path));

      const songResponse = await axios.post(PINATA_API, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      });
      const songHash = songResponse.data.IpfsHash;

      // Upload img file to Pinata
      const imgFile = req.files["img"][0];
      formData = new FormData();
      formData.append("file", fs.createReadStream(imgFile.path));

      const imgResponse = await axios.post(PINATA_API, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      });
      const imgHash = imgResponse.data.IpfsHash;

      // Create the song in the database
      const songData = {
        ...req.body,
        song: songHash,
        img: imgHash,
      };
      // Create the song
      const song = await Song.create(songData);

      // Update the corresponding artist with song id
      const artist = await Artist.findById(song.artist);
      if (!artist) {
        return res.status(404).send({ message: "Artist not found" });
      }
      artist.songs.push(song._id);
      await artist.save();
      fs.unlinkSync(songFile.path);
      fs.unlinkSync(imgFile.path);
      emptyUploadsFolder();
      res
        .status(201)
        .send({ data: song, message: "Song created successfully" });
    } catch (error) {
      console.error("Error creating song:", error);
      res.status(500).send({ message: "Failed to create song" });
    }
  }
);

// Get all songs
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).send({ data: songs });
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).send({ message: "Failed to fetch songs" });
  }
});

// get song by id
router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).populate("artist");
    res.status(200).send({ data: song });
  } catch (error) {
    console.error("Error fetching song: ", error);
  }
});
// Update song
router.put("/:id", admin, async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!song) {
      return res.status(404).send({ message: "Song not found" });
    }
    res.status(200).send({ data: song, message: "Song updated successfully" });
  } catch (error) {
    console.error("Error updating song:", error);
    res.status(500).send({ message: "Failed to update song" });
  }
});

// Delete song
router.delete("/:id", admin, async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).send({ message: "Song not found" });
    }

    // Remove the song from the corresponding artist
    const artist = await Artist.findById(song.artist);
    if (artist) {
      artist.songs = artist.songs.filter(
        (songId) => songId.toString() !== song._id.toString()
      );
      await artist.save();
    }

    res.status(200).send({ message: "Song deleted successfully" });
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).send({ message: "Failed to delete song" });
  }
});
//get all liked songs
router.get("/like/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });
    const likedSongs = user.likedSongs;
    const songs = await Song.find({ _id: { $in: likedSongs } });
    res.status(200).send({ data: songs });
  } catch (error) {
    console.error("Error fetching song: ", error);
  }
});

//get all purchased songs
router.get("/purchased/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    const purchasedSongs = user.purchasedSongs;
    const songs = await Song.find({ _id: { $in: purchasedSongs } });
    res.status(200).send({ data: songs });
  } catch (error) {
    console.error("Error fetching song: ", error);
  }
});

module.exports = router;
