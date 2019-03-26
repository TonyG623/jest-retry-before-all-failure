module.exports = {
  setupFilesAfterEnv: ['./test/test.js'],
  roots:["<rootDir>/src/", "<rootDir>/test/"],
  testRegex: '(/__tests__/.*|(\\.|/)(spec|e2e))\\.js$',
  testRunner: 'jest-circus/runner',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Tests',
        outputDirectory: '.',
        outputName: 'test-results-ci.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: 'coverage-api',
  bail: true
}
