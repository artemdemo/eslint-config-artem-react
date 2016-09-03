'use strict';

const artemConfig = require('eslint-config-artem');

const plugins = Array.isArray(artemConfig.plugins) ? artemConfig.plugins : [];

const config = {
    "extends": "airbnb",
    "plugins": plugins.concat([
        "react",
        "jsx-a11y",
    ]),
    "rules": Object.assign(artemConfig.rules, {
        "react/prop-types": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/prefer-stateless-function": 0,
        "react/no-did-mount-set-state": 0,
        "react/jsx-pascal-case": 0,
        "react/jsx-no-bind": 0,
        "jsx-quotes": ["error", "prefer-single"]
    }),
}

const reactConfig = Object.assign(artemConfig, config);

module.exports = reactConfig;
