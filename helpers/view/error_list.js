"use strict";

const Handlebars = require("hbs").handlebars;

function error_list(errors) {
  const list = errors.map((error) => {
    return "<li>" + error + "</li>"
  });

  return new Handlebars.SafeString("<ul>" + list.join("") + "</ul>");
}

module.exports = error_list;