const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  likedSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "song",
  },
  purchasedSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "song",
  },
  recentlyPlayedSongs: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "song",
  },
  isAdmin: { type: Boolean, default: false },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, isAdmin: this.isAdmin },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "1d" }
  );
  return token;
};

const validate = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(15).required(),
    name: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
    gender: Joi.string().valid("male", "female", "non-binary").required(),
  });
  return schema.validate(user);
};

const User = mongoose.model("user", userSchema);

module.exports = { User, validate };
