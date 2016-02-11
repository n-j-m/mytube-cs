"use strict";

const logoutRouter = require("express").Router();

logoutRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = logoutRouter;