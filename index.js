import globals from 'globals';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import airbnbPractices from './rules/best-practices.js';
import airbnbStrict from './rules/strict.js';
import airbnbEs6 from './rules/es6.js';
import airbnbErrors from './rules/errors.js';
import airbnbNode from './rules/node.js';

const rules = {
  indent: ['error', 2, { MemberExpression: 0 }],
  quotes: ['error', 'single', { avoidEscape: true }],
  camelcase: ['error', { properties: 'never' }],
  semi: ['error', 'always'],
  eqeqeq: ['error', 'always'],
  'class-methods-use-this': 'off',
  'arrow-parens': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'quote-props': ['error', 'as-needed'],
  'padded-blocks': ['error', 'never'],
  'linebreak-style': ['error', 'unix'],
  'no-shadow': 'error',
  'no-console': ['warn'],
  'no-debugger': ['error'],
  'no-multi-spaces': ['error'],
  'no-await-in-loop': 'off',
  'no-param-reassign': 'off',
  'no-confusing-arrow': 'off',
  'no-trailing-spaces': ['error'],
  'no-use-before-define': ['error'],
  'object-curly-newline': ['error', {
    ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
  }],
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

  // --- JavaScript coding style rule ---
  'array-bracket-spacing': ['error', 'never'],
  'block-spacing': ['error', 'always'],
  'comma-spacing': ['error', { before: false, after: true }],
  'func-call-spacing': ['error', 'never'],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'lines-between-class-members': ['error', 'always'],
  'object-curly-spacing': ['error', 'always'],
  'space-before-blocks': ['error', 'always'],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error'],
  'spaced-comment': ['error', 'always'],
  'no-restricted-syntax': ['error', {
    selector: "CallExpression[callee.name='Number']",
    message: 'using to Number.parseInt, Number.parseFloat',
  }],
  'no-extra-parens': ['error', 'all', {
    enforceForArrowConditionals: true,
    enforceForSequenceExpressions: true,
    enforceForNewInMemberExpressions: true,
  }],

  // --- import rule ---
  'import/named': ['error'],
  'import/default': ['error'],
  'import/order': ['error'],
  'import/no-duplicates': ['error'],
  'import/newline-after-import': ['error'],
  'import/no-mutable-exports': ['error'],
  'import/extensions': ['error', 'always', { ignorePackages: true }],
};

const recommended = {
  name: 'eslint-plugin-standard/recommended',
  files: ['**/*.{js,mjs,cjs}'],
  ignores: ['coverage/', '**/assets/', '**/*.min.js', '**/.*/'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
    },
  },
  plugins: {
    import: importPlugin,
  },
  rules: {
    ...airbnbPractices.rules,
    ...airbnbStrict.rules,
    ...airbnbEs6.rules,
    ...airbnbErrors.rules,
    ...airbnbNode.rules,
    ...rules,
  },
};

const standard = {
  ...recommended,
  name: 'eslint-plugin-standard/standard',
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...recommended.rules,
  },
};

export default {
  rules: {},
  configs: {
    recommended,
    standard,
  },
};
