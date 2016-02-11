"use strict";

const userTable = (t) => {
  t.increments().primary();
  t.string("username").unique();
  t.string("password");
  t.timestamps();
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", userTable)
    .then(() => console.log("users table created"));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users", userTable)
    .then(() => console.log("users table dropped"));
};
