module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
      settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'prettier',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
          'no-console': 'warn',
          'react/prop-types': 'off',
          'react/button-has-type': 'warn',
          'react/self-closing-comp': [
              'warn',
              {
                  component: true,
                  html: false
              }
          ],
          'react/jsx-sort-props': [
            'warn',
            {
              shorthandFirst: true,
              callbacksLast: true,
              noSortAlphabetically: false,
              reservedFirst: true,
                  multiline: 'last',
            },
          ],
      },
  };