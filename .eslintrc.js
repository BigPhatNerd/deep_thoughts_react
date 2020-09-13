module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },

    "parser": "babel-eslint",
    "rules": {
        "strict": 0
    },

    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {}
};