const mongoose = require("mongoose");
const Joi = require("joi");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  songs: { type: [mongoose.Schema.Types.ObjectId], ref: "song", default: [] },
  img: { type: String },
  genre: { type: String, required: true },
});

const validate = (artist) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string(),
    genre: Joi.string().required(),
    songs: Joi.array(),
  });
  return schema.validate(artist);
};

const Artist = mongoose.model("artist", artistSchema);

module.exports = { Artist, validate };
