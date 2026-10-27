import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/dist/", "**/node_modules/", "trash/"] },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // Self-cleaning suppression: a disable comment that stops firing is an error.
    linterOptions: { reportUnusedDisableDirectives: "error" },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      // autofixable
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/prefer-readonly": "error",
      eqeqeq: "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-template": "error",

      // a new union member must fail loudly, not fall through
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        { considerDefaultExhaustiveForUnions: false },
      ],

      // no type-checker directives except a described ts-expect-error
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // obligations belong in failing checks, not comments
      "no-warning-comments": [
        "error",
        { terms: ["todo", "fixme", "xxx"], location: "anywhere" },
      ],
      "no-console": "warn",
      "max-lines-per-function": [
        "warn",
        { max: 40, skipBlankLines: true, skipComments: true },
      ],
    },
  },
  // Plain JS (e.g. this file) is outside every tsconfig.
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  // Turns off rules that conflict with prettier (including curly).
  prettier,
  // After prettier: safe because prettier never removes braces.
  { rules: { curly: ["error", "all"] } },
);
