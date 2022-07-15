module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // React
    'react/jsx-no-comment-textnodes': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        useTabs: false,
        printWidth: 80,
        semi: true,
      },
    ],

    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,

    // TypeScript
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
