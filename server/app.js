const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(bodyParser.json());

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

module.exports = app;
