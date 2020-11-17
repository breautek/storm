
module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@totalpave/recommendedTS"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig-tests.json",
        "sourceType": "module",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "@typescript-eslint",
        "@totalpave"
    ],
    "env": {
        "node": true,
        "jasmine": true
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "prefer-const": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "args": "none",
                "vars": "local"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                "assertionStyle": "angle-bracket"
            }
        ],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/camelcase": "off"
    }
};
