module.exports = {
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest/dist'),
  },
  testRegex: '(/__tests__/.*test)\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^gatsby-page-utils/(.*)$': 'gatsby-page-utils/dist/$1',
  },
  testEnvironment: 'jsdom',
};
