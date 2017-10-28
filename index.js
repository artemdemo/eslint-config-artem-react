'use strict';

const artemConfig = require('eslint-config-artem');

const plugins = Array.isArray(artemConfig.plugins) ? artemConfig.plugins : [];

const config = {
    "extends": "airbnb",
    "plugins": plugins.concat([
        "react",
        "jsx-a11y",
    ]),
    "env": Object.assign(artemConfig.env, {
        "jest": true,
    }),
    "rules": Object.assign(artemConfig.rules, {
        // Warning if class method is used without `this`
        // Exception is `render()` method case I have to use it anyways in React
        "class-methods-use-this": ["warn", { "exceptMethods": ["render"] }],
        "jsx-quotes": ["error", "prefer-single"],

        /**
         * react
         */
        "react/prop-types": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/no-did-mount-set-state": 0,
        "react/jsx-no-bind": 0,
        // Enforce to use default properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        "react/require-default-props": ["warn"],
        // It's wrong to use pure index as key, but it's okey to wrap it in unique string
        // like ths: `unique-key-${key}`
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        "react/no-array-index-key": ["warn"],

        /**
         * import
         */
        // In redux we have following pattern:
        // export default connect()(Component);
        // And this property will trigger error
        "import/no-named-as-default": 0,

        /**
         * jsx-a11y
         */
        // Sure it feels better to use <button> tag when you need to attach click event
        // But what you'll do when you want to listen to click event on <tr>?
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        "jsx-a11y/no-static-element-interactions": "warn",
        // This error doesn't make sense when I'm using <input> inside of <label>
        "jsx-a11y/label-has-for": "warn",
        // We allowing to use "onClick" events on various elements
        // like "div", "span", etc
        "jsx-a11y/click-events-have-key-events": ["warn"],
        // Check valid "href" attributes on "a" tag.
        // But do not use it in "Link" components.
        "jsx-a11y/anchor-is-valid": [ "error", {
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }]
    }),
}

const reactConfig = Object.assign(artemConfig, config);

module.exports = reactConfig;
