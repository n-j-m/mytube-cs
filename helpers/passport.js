"use strict";

const LocalStrategy = require("passport-local").Strategy;

const bookshelf = require("../models");
const User = bookshelf.model("User");
const notFoundError = require("./notFoundError");

function initPassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.get("id"));
  });

  passport.deserializeUser((id, done) => {
    User.forge({id}).fetch()
      .then(user => {
        if (!user) {
          return done(notFoundError());
        }
        return done(null, user);
      });
  });

  const localStrategy = new LocalStrategy((username, password, done) => {
    User.verify({username, password})
      .then(user => done(null, !!user ? user : false))
      .catch(done);
  });
  passport.use(localStrategy);
}

module.exports = initPassport;