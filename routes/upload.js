"use strict";

const path = require("path");

const bookshelf = require("../models");
const Video = bookshelf.model("Video");

// config multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",
  filename(req, file, done) {
    done(null,
      file.fieldname + "_" + String(Date.now()) + path.extname(file.originalname));
  }
});
const uploader = multer({ storage });

// router setup
const uploadRouter = require("express").Router();

uploadRouter.post("/upload", uploader.single("video"), (req, res, next) => {
  console.log("request:", {
    bodey: req.body,
    file: req.file,
    user: req.user
  });
  res.redirect("/profile");
});

module.exports = uploadRouter;