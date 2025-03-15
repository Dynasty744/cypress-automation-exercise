import globals from "globals";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { rules: {
    'semi': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
  } },
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
];
