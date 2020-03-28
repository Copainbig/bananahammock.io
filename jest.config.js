module.export = {
  roots: ['<rootDir>'],
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    "^.+\\.(css|scss)$": '<rootDir>/tests/config/scsStub.js'
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', 
    '@testing-library/react/cleanup-after-each'
  ]
};