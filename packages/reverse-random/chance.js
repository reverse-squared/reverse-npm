/**
 * Returns true a percent amount of the time.
 * @param {Number} percent The percent chance to return true.
 * @returns {Boolean} Returns true percent amount of the time.
 */
function chance(percent) {
  return Math.random() * 100 <= percent;
}

module.exports = chance;
