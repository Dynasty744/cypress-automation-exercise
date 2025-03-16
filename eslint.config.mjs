import globals from "globals";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { rules: {
    'semi': ['warn', 'always'],
    'eol-last': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
  } },
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
];
