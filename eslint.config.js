export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },
];