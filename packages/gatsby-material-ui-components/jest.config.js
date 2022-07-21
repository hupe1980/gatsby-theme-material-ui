module.exports = {
  transform: {
    '^.+\\.tsx?$': require.resolve('ts-jest/dist'),
  },
  testRegex: '(/__tests__/.*test)\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
};
