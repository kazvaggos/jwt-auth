module.exports = {
  rootDir: '../',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: [
    "js",
    "json"
  ],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.fun.js?(x)'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './reports/results/functional/index.html'
      }
    ]
  ]
};
