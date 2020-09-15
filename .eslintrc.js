/* eslint-disable fp/no-mutation */
/* eslint-disable no-undef */

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
      },

      alias: [ ]
    },
  },

  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    'fp',
  ],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:fp/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/quotes': [ 'error', 'single', { avoidEscape: true, } ],
    '@typescript-eslint/semi': ['error'],
    'fp/no-rest-parameters': 'off',
  },
};
