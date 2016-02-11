"use strict";

const addUserId = (t) => {
  t.integer("user_id").references("id").inTable("users");
};

const removeUserId = (t) => {
  t.dropColumn("user_id");
};

exports.up = function(knex, Promise) {
  return knex.schema.table("videos", addUserId)
    .then(() => console.log("added user_id column to videos"));
};

exports.down = function(knex, Promise) {
  return knex.schema.table("videos", removeUserId)
    .then(() => console.log("removed user_id column from videos"));
};
