module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    "^.+\\.(css|scss)$": '<rootDir>/tests/config/scssStub.js'
  },
  testMatch: ['<rootDir>/tests/**/(*.)test.{js, jsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', 
  ]
};