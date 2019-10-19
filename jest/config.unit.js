module.exports = {
  rootDir: '../',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.unit.js?(x)'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!src/**/__tests__/**', '!**/node_modules/**'],
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/reports/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './reports/results/unit/index.html'
      }
    ]
  ]
};
