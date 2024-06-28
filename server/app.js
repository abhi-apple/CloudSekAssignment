const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

connectDB();
app.use(
  cors({
    origin: "https://cloud-sek-assignment-z98v.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());

app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

module.exports = app;
