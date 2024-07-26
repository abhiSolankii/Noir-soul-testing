const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const { Song } = require("../models/song");

//create user
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(403).send({ message: "Username already exists" });
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  let newUser = await new User({
    ...req.body,
    password: hashPassword,
  }).save();

  newUser.password = undefined;
  newUser.__v = undefined;
  res.status(200).send({
    data: newUser,
    message: "Account created successfully, Please Log in",
  });
});

//get all users
router.get("/", admin, async (req, res) => {
  const users = await User.find().select("-password-__v");
  res.status(200).send({ data: users });
});

//get user by id
router.get("/:id", [validateObjectId, auth], async (req, res) => {
  const user = await User.findById(req.params.id)
    .select("-passowrd-__v")
    .populate("purchasedSongs")
    .populate("likedSongs")
    .populate("purchasedSongs")
    .populate("recentlyPlayedSongs");

  const likedSongs = await Song.find({ _id: { $in: user.likedSongs } });
  // console.log(likedSongs);
  res.status(200).send({ data: user, likedSongs: likedSongs });
});

// update user by id
router.put("/:id", [validateObjectId, auth], async (req, res) => {
  const { songId, ...profileUpdates } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).send({ message: "User not found" });

    // Handle recently played songs update
    if (songId) {
      user.recentlyPlayedSongs = user.recentlyPlayedSongs.filter(
        (id) => id.toString() !== songId
      );

      user.recentlyPlayedSongs.unshift(songId);

      if (user.recentlyPlayedSongs.length > 8) {
        user.recentlyPlayedSongs.pop();
      }
    }

    // Handle profile updates
    if (Object.keys(profileUpdates).length > 0) {
      Object.assign(user, profileUpdates);
    }

    await user.save();

    res
      .status(200)
      .send({ data: user, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send({ message: "Failed to update user" });
  }
});

// delete user by id
router.delete("/:id", [validateObjectId, admin], async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Successfully deleted user." });
});

// Route to like a song
router.post("/:userId/like/:songId", auth, async (req, res) => {
  try {
    const userId = req.params.userId;
    const songId = req.params.songId;

    const user = await User.findById(userId);
    const song = await Song.findById(songId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (!song) {
      return res.status(404).send({ message: "Song not found" });
    }
    // Check if the song is already liked
    if (user.likedSongs.includes(songId)) {
      // Remove the song from the liked songs
      user.likedSongs = user.likedSongs.filter(
        (id) => id.toString() !== songId
      );
      await user.save();
      return res
        .status(200)
        .send({ message: "Removed from liked songs", data: user.likedSongs });
    }
    const songIdToString = songId.toString();
    user.likedSongs.push(songIdToString);
    await user.save();

    res
      .status(200)
      .send({ message: "Song liked successfully", data: user.likedSongs });
  } catch (error) {
    console.error("Error liking song:", error);
    res.status(500).send({ message: "Failed to like song" });
  }
});

module.exports = router;
