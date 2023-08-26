const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

// user routes
app.use("/user", userRoutes);

require("dotenv").config();

module.exports = app;
