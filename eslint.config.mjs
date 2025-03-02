import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    settings: {
      react: {
        version: "detect",
      },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion: 2020,
      sourceType: "module",
    },
    overrides: [
      {
        files: ["eslint.config.mjs"],
        parser: "espree",
      },
    ],
    extends: [
      // Next best practices
      "next",
      "next/typescript",
      "plugin:@next/next/recommended",

      // General best practices
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",

      // Prettier support
      "prettier",
    ],
    rules: {
      // General rules
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off",

      // Typescript rules
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "error",
    },
  }),
];

export default eslintConfig;
