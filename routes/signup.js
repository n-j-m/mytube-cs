"use strict";

const signupRouter = require("express").Router();
const passport = require("passport");

const bookshelf = require("../models");
const User = bookshelf.model("User");

signupRouter.get("/signup", (req, res) => {
  res.render("signup");
});

signupRouter.post("/signup", (req, res, next) => {
  User.forge(req.body)
    .save()
    .then(user => {
      passport.authenticate("local", {
        failureRedirect: "/signup",
        successRedirect: "/"
      })(req, res, next);
    })
    .catch(next);
});

module.exports = signupRouter;