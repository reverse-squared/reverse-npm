const chars = 6;

function defaultIDGenerator() {
  return Math.floor(Math.random() * Math.pow(2, 4 * chars))
    .toString(16)
    .toUpperCase()
    .padStart(chars, '0');
}

let currentIDGenerator = defaultIDGenerator;

function generateID() {
  return currentIDGenerator();
}

function setIDGenerator(generator) {
  currentIDGenerator = generator;
}

module.exports = {
  generateID,
  setIDGenerator,
};
