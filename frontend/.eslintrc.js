module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
