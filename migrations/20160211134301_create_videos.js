"use strict";

const videosTable = (t) => {
  t.increments().primary();
  t.string("title");
  t.string("description");
  t.string("path")
  t.timestamps();
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("videos", videosTable)
    .then(() => console.log("videos table created"));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("videos", videosTable)
    .then(() => console.log("videos table dropped"));
};
