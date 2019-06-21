/**
 * Formats a string by substituting variables.
 * @param {String} format The string to format.
 * @param  {...any} variables Any variables to substitute in the string.
 * @returns {String} A formatted string with variables substituted in.
 */
function format(format, ...variables) {
  return format.replace(/\$[0-9]+/g, (x) => String(variables[parseInt(x.substring(1)) - 1]));
}

module.exports = format;
