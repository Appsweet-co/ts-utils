/* eslint-disable fp/no-mutation */
/* eslint-disable no-undef */

module.exports = {
  root: true,

  settings: {
    "import/resolver": {

      node: {
        extensions: [".ts", ".tsx"],
        paths: ["./lib"],
      },

      alias: [ ]
    },
  },

  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    "fp",
  ],

  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    "plugin:fp/recommended"
  ],

  rules: { },
};
