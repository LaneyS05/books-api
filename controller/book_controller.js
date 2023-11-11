const express = require("express");
const books = express.Router();
const Book = require("../models/book");

// Index:
books.get("/", (req, res) => {
  Language.find().then((foundBooks) => {
    res.json(foundBooks);
  });
});

module.exports = books;
