const express = require("express");
const mongoose = require("mongoose");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

// MIDDLEWARE
app.use(express.json());

// Books
const booksController = require("./controller/book_controller.js");
app.use("/books", booksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome To Books API");
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
});
start();
//module.exports = app;
