module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'] // For rules which require type info
  },
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Uncomment if using Prettier:
    // 'plugin:prettier/recommended'
    ],
   ignorePatterns: [
    'node_modules',
    'dist'
    // any other folders or files you want to ignore
  ],
  rules: {
    // Customize or override rules here
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
