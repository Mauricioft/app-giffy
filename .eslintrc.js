module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // enable additional rules
    indent: ['error', 2],
    // disable rules from base configurations
    'no-console': 'off'
  }
}
