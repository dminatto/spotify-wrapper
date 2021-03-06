const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

delete compilerOptions.paths['*']

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['tests/**/*.ts', '!**/node_modules/**'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['tests/'],
  testPathIgnorePatterns: ['<rootDir>/(?:.+?)/dist/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}
