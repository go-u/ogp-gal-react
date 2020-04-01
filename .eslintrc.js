module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts",".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx",".ts",".tsx"]
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        'extensions':
          [
            '.js', '.jsx', '.ts', '.tsx'
          ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      }
    }
  ]
};
