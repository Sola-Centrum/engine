/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@engine/eslint-config/base'],
  ignorePatterns: ['*.js'],
  overrides: [
    {
      files: ['./src/migrations/*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
