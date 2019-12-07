module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    "cy": true,
    "Cypress": true,
    "context": true
  },
  parser: "babel-eslint",
  plugins: [
    'react'
  ],
  rules: {
    semi: ["error", "always", {"omitLastInOneLineBlock": true}],
    indent: ["error", 4],
    "jsx-quotes": ["error", "prefer-double"],
    quotes: ["error", "double"]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
