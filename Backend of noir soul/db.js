const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB); // Removed the deprecated options
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
