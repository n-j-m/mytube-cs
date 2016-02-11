"use strict";

const passport = require("passport");
const loginRouter = require("express").Router();

loginRouter.post("/login", passport.authenticate("local", {
  failureRedirect: "/",
  successRedirect: "/profile",
  failureFlash: "Invalid username or password"
}));

module.exports = loginRouter;