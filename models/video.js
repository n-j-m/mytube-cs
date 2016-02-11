"use strict";

const bookshelf = require("./bookshelf");

const Video = bookshelf.Model.extend({
  tableName: "videos",
  hasTimestamps: true,
  hidden: ["path"],

  user() {
    return this.belongsTo("User");
  }
});

module.exports = bookshelf.model("Video", Video);