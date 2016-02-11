"use strict";

const homeRouter = require("express").Router();

/* GET home page. */
homeRouter.get("/", function(req, res, next) {
  const user = req.user;
  const errors = req.flash("error");
  if (user) {
    user.videos().fetch()
      .then(myVideos => {
        myVideos = myVideos.toJSON();
        console.log("myVideos:", myVideos);
        res.render("index", { user: user.toJSON(), errors, myVideos });
      })
      .catch(next);
  }
  else {
    res.render("index", { errors });
  }
});

module.exports = homeRouter;