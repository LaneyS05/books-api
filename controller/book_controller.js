const express = require("express");
const books = express.Router();
const Book = require("../models/book");

// Index:
books.get("/", (req, res) => {
  Book.find()
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      res.json("404");
    });
});

books.post("/", (req, res) => {
  Book.create(req.body).then((foundBooks) => {
    res.json(foundBooks);
  });
});

books.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

books.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id)
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

books.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json();
    })
    .catch((err) => {
      res.render("error404");
    });
});

module.exports = books;
