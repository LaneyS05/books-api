const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Books
const booksController = require("./controller/book_controller.js");
app.use("/books", booksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome To Books API");
});
app.get("/books/:id", function (req, res) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

const start = async () => {
  try {
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("connected");
  } catch (e) {
    console.log("error");
  }
};
app.listen(PORT, () => {
  console.log("listening on port", PORT);
  console.log("CORS-enabled web server listening on port 3000");
});
start();
//module.exports = app;
