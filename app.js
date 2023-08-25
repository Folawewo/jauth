const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

// user routes
app.use("/user", userRoutes);

require("dotenv").config();

module.exports = app;
