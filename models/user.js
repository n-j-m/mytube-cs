"use strict";

const bookshelf = require("./bookshelf");

const encryptPassword = require("../helpers/encryptPassword");
const createSalt = require("../helpers/createSalt");
const unauthedError = require("../helpers/unauthedError");

function onCreate(model, attrs, options) {
  const password = model.get("password");
  return encryptPassword(password, createSalt(128))
    .then(encryptedPassword => model.set("password", encryptedPassword));
}

const User = bookshelf.Model.extend({
  tableName: "users",
  hasTimestamps: true,
  hidden: ["password"],

  videos() {
    return this.hasMany("Video");
  },

  initialize() {
    this.on("creating", onCreate);
  }
}, {
  verify(credentials) {
    const username = credentials.username;
    const password = credentials.password;

    return User.forge({username}).fetch()
      .then(user => {
        if (!user) {
          return null;
        }

        const userPassword = user.get("password");
        const salt = userPassword.substr(0, userPassword.indexOf("=") + 1);
        return encryptPassword(password, salt)
          .then(encryptedPassword => {
            if (encryptedPassword === userPassword) {
              return user;
            }
            return null;
          });
      });
  }
});

module.exports = bookshelf.model("User", User);