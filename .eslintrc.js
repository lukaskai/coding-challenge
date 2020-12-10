module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    semi: ['error', 'never'],
    'jsx-quotes': [2, 'prefer-single'],
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-extra-semi': 0,
  },
}
