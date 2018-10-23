module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "react-native/react-native": true
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "extends": "airbnb"
};