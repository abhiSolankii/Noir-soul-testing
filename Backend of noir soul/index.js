require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./Routes/users");
const authRoutes = require("./Routes/auth");
const songRoutes = require("./Routes/songs");
const artistRoutes = require("./Routes/artists");
const searchRoutes = require("./Routes/search");

const app = express();
connection();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/search", searchRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}`));
