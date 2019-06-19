/**
 * Checks if a email is a valid formatted email.
 * @param {String} email The email to check.
 * @returns {Boolean} Whether or not the email is a valid email.
 */
function isValidEmail(email) {
  // eslint-disable-next-line max-len
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}

module.exports = isValidEmail;
