const mongoose = require("mongoose");
const Joi = require("joi");

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artistName: { type: String, required: true },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "artist",
    required: true,
  },
  img: { type: String },
  duration: { type: String, required: true },
  song: { type: String },
  genre: { type: String, required: true },
});

const validate = (song) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    artistName: Joi.string().required(),
    artist: Joi.string().required(),
    img: Joi.string(),
    duration: Joi.string().required(),
    song: Joi.string(),
    genre: Joi.string().required(),
  });
  return schema.validate(song);
};

const Song = mongoose.model("song", songSchema);

module.exports = { Song, validate };
