/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */

module.exports = {
  root: true,

  env: {
    'es6': true
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['./lib'],
      }
    }
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json'
  },

  plugins: [
    '@typescript-eslint',
    'functional',
    'import'
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings'
  ],

  rules: {
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    'functional/functional-parameters': 'off',
    'functional/prefer-readonly-type': 'off'
  },
};
