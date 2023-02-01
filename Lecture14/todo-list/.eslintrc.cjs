module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "simple-import-sort"
    ],
    "rules": {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "semi": [2, "always"],
        "eol-last": [2, "always"]
    }
};
