const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

// Login route
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user)
    return res.status(400).send({ message: "invalid username or password!" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ message: "Invalid username or password!" });

  const token = user.generateAuthToken();
  res
    .status(200)
    .send({ data: token, user: user, message: "Logging in please wait..." });
});

// Logout route
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("x-auth-token");
    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error logging out in backend: ", error);
    res.status(500).send({ message: "Error logging out" });
  }
});

module.exports = router;
