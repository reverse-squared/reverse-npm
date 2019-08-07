module.exports = {
  'roots': [
    '<rootDir>/packages',
  ],
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'setupFilesAfterEnv': ['<rootDir>/setupTests.js']
};
