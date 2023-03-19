module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'function-url-quotes': 'always',
    'selector-class-pattern': null,
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
};
