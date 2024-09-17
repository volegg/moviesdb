const isDev = process.env.NODE_ENV === "development";

module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "eslint-plugin-import",
        "prettier",
        "simple-import-sort"
    ],
    env: {
        browser: true
    },
    extends: [
        "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:react/recommended"
    ],
    parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        extraFileExtensions: [".skip"]
    },
    rules: {
        "simple-import-sort/imports": [
            "error", {
                groups: [
                    [
                        // react
                        "^react",
                        // redux
                        "^redux",
                        // @*
                        "^@\\w",
                        // all the rest
                        "^\\w"
                    ],
                    [// from src
                        "^src\\/.*"],
                    [
                        // ../
                        "^\\.\\.(?!/?$)",
                        "^\\.\\./?$"
                    ],
                    [
                        // ./
                        "^\\./(?=.*/)(?!/?$)",
                        "^\\.(?!/?$)",
                        "^\\./?$"
                    ]
                ]
            }
        ],
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": [
            isDev
                ? "warn"
                : "error", {
                ignoreRestSiblings: true
            }
        ],
        "react/jsx-filename-extension": [
            "warn", {
                extensions: [".jsx", ".tsx"]
            }
        ],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
            "error", {
                builtinGlobals: false,
                hoist: "functions",
                allow: []
            }
        ],
        eqeqeq: [
            "error",
            "always", {
                null: "ignore"
            }
        ],
        "no-else-return": [
            "error", {
                allowElseIf: false
            }
        ],
        "no-empty-function": [
            "error", {
                allow: ["arrowFunctions", "functions", "methods"]
            }
        ],
        "no-console": isDev
            ? "warn"
            : "error",
        "prettier/prettier": [
            "error", {
                endOfLine: "lf"
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
