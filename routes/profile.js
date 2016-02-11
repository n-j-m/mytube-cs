"use strict";

const profileRouter = require("express").Router();

profileRouter.get("/profile", (req, res, next) => {
  const user = req.user;
  if (!user) {
    return next();
  }

  res.render("profile", { user });
});

module.exports = profileRouter;