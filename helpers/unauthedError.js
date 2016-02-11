"use strict";

function unauthedError(message) {
  const error = new Error(message || "Unauthorized");
  error.status = 401;
  return error;
}

module.exports = unauthedError;