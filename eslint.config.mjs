import globals from "globals";
import pluginJs from "@eslint/js";

import airbnb1 from './rules/best-practices.js';
import airbnb2 from './rules/strict.js';
import airbnb3 from './rules/es6.js';
import airbnb4 from './rules/errors.js';
import airbnb5 from './rules/node.js';

const { configs: { recommended } } = pluginJs;

export default [{
  files: ['**/*.js'],
  languageOptions: { ecmaVersion: 2024, sourceType: 'commonjs' },
}, {
  files: ['**/*.mjs'],
  languageOptions: { ecmaVersion: 2024, sourceType: 'module' },
}, {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest,
    },
  },
  rules: {
    ...airbnb1.rules,
    ...airbnb2.rules,
    ...airbnb3.rules,
    ...airbnb4.rules,
    ...airbnb5.rules,
    indent: ['error', 2, { MemberExpression: 0 }],
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'arrow-parens': 'off',
  },
}, recommended];
