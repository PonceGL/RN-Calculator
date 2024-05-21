module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules/',
    '<rootDir>/lib/',
    '<rootDir>/jest/',
    '<rootDir>/src/jest/',
    '<rootDir>/.yalc/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
  },
  coverageReporters: ['json-summary', 'html', 'text-summary', 'lcov'],
  coveragePathIgnorePatterns: ['<rootDir>/src/jest/'],
};
