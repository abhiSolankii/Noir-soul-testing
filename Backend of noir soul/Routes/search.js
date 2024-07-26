const router = require("express").Router();
const { Song } = require("../models/song");
const { Artist } = require("../models/artist");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const search = req.query.search;
  if (search !== "") {
    const songs = await Song.find({
      name: { $regex: search, $options: "i" },
    }).limit(20);
    const artists = await Artist.find({
      name: { $regex: search, $options: "i" },
    }).limit(20);
    const result = { songs: songs, artists: artists };
    res.status(200).send(result);
  } else {
    res.status(200).send({ message: "No songs and artists" });
  }
});

module.exports = router;
