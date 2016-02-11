"use strict";

function isActive(path, target) {
  return path === target ? "active" : "";
}

module.exports = isActive;