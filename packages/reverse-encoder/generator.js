function defaultIDGenerator() {
  return Math.floor(Math.pow(Math.random() * 2, 24)).toString(16).toUpperCase().padStart(4, '0');
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
