"use strict";

const knexfile = require("../knexfile");
const knex = require("knex")(knexfile[process.env.NODE_ENV || "development"]);

const bookshelf = require("bookshelf")(knex);

bookshelf.plugin("registry");
bookshelf.plugin("visibility");

module.exports = bookshelf;