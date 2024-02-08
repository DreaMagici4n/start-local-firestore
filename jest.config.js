
/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**'],
  coverageProvider: "v8",
  roots: [
    "<rootDir>/src"
  ],

  testEnvironment: "jest-environment-node",

  testPathIgnorePatterns: [
    "/node_modules/"
  ],
};

module.exports = config;
