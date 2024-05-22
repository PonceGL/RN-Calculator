module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'react-native/no-unused-styles': 0,
    'eslint-comments/no-unused-disable': 'off',
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 1,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2,
    'react-hooks/exhaustive-deps': 0,
    'prefer-const': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    '@typescript-eslint/no-empty-function': 0,
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^'],
          ['^react', '^@?\\w'],
          ['^\\.'],
          ['^node:'],
        ],
      },
    ],
  },
};
