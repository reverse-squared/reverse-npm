export type IDGenerator = () => string;

const chars = 6;

function defaultIDGenerator() {
  return Math.floor(Math.random() * Math.pow(2, 4 * chars))
    .toString(16)
    .toUpperCase()
    .padStart(chars, '0');
}

let currentIDGenerator: IDGenerator = defaultIDGenerator;

export function generateID() {
  return currentIDGenerator();
}

export function setIDGenerator(generator: IDGenerator) {
  currentIDGenerator = generator;
}
