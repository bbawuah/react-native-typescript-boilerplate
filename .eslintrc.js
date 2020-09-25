module.exports = {
  root: true,
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['createDefaultTranslationObject.js'],
  extends: [
      '@react-native-community',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
  ],
  rules: {
      semi: [2, 'never'],
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'no-return-await': 'error',
      'no-else-return': 'error',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-member-accessibility': 2,
      'no-console': 'warn',
      'react/jsx-boolean-value': [2, 'always'],
      'react/self-closing-comp': [
          2,
          {
              component: true,
          },
      ],
      '@typescript-eslint/member-ordering': [2],
      'no-shadow': 'off',
  },
};
