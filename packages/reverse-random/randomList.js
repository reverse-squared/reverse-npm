const MissingItem = Symbol('MissingItem');

/**
 * Picks multiple values from an array.
 * @param {Array} list The array to choose from.
 * @param {Number} items How many items should be returned. Default 1.
 * @param {Array} requiredValues The values that have to be in the returned items. Default [].
 * @returns {Array} The returned values.
 */
function randomList(list, items = 1, requiredValues = []) {
  let requiredValuesPositions = requiredValues.map(() => -1);
  let values = Array(items).fill(MissingItem);
  requiredValues.forEach((item, i) => {
    let position;
    do {
      position = Math.floor(Math.random() * items);
    } while (requiredValuesPositions.includes(position));

    requiredValuesPositions[i] = position;
  });
  requiredValuesPositions.forEach((position, i) => {
    values[position] = requiredValues[i];
  });
  return values.map(item => {
    if (item === MissingItem) {
      return randomOf(list);
    }
    return item;
  });
}

module.exports = randomList;
