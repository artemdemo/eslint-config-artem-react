module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "import",
        "react",
        "jsx-a11y"
    ],
    "globals": {
        "ENV": true
    },
    "env": {
        "jest": true,
        "browser": true,
        "node": true
    },
    "rules": {
        // 4 spaces indentation
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1
            }
        ],
        // return should be without assign action,
        // but it's not good in cases like the following one:
        // setProperty = (newValue) => property = neslint-plugin-reactewValue;
        "no-return-assign": 0,
        // Max line length
        "max-len": [
            "error",
            120
        ],
        // Allowing overriding variables.
        // For example in: tests (using `done`), object destructuring
        "no-shadow": 0,
        // You can use "fat arrow" without parenthesis for variables:
        // someArray.filter(item => item.done);
        "arrow-body-style": 0,
        // I use spaces whe importing variables from modules
        // import { loadProjects } from './projects';
        "object-curly-spacing": 0,
        // No reassigning function parameters
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        // Do not declare unused expressions
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true
            }
        ],
        // You can use `switch` without `default`
        "default-case": 0,
        // Empty string in object declaration
        // There is no need in such rule
        "padded-blocks": 0,
        // Don't use quotes in objects properties names. only when you should use it
        "quote-props": [
            "error",
            "as-needed",
            {
                "keywords": true
            }
        ],
        // Consistency in what function returns
        "consistent-return": [
            "warn"
        ],
        // You can't use variables before definition.
        // Functions are exception in his rule, case of hoisting
        "no-use-before-define": [
            "error",
            {
                "functions": false
            }
        ],
        // In some cases "fat arrow" looks like comparison operator (>, <, <=, and >=)
        // But I don't see how it's a problem
        "no-confusing-arrow": 0,
        // Write IIFE with parenthesis and not some wired shit
        "wrap-iife": [
            "error",
            "inside"
        ],
        // Disallowing some language features:
        // Do not leave command `debugger` in your code
        // Do not use `with`
        "no-restricted-syntax": [
            "error",
            "DebuggerStatement",
            "WithStatement"
        ],
        "func-names": 0,
        // No space before function parenthesis
        "space-before-function-paren": [
            "error",
            "never"
        ],
        // After key operators (if, else, for, etc) should be at least one space
        "keyword-spacing": [
            "error",
            {
                "overrides": {
                    "catch": {
                        "after": true
                    }
                }
            }
        ],
        "no-case-declarations": 0,
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],
        // You're not obligated to declare variables in the beginning of the function
        "vars-on-top": 0,
        // Use underscore to mark "private" methods
        "no-underscore-dangle": 0,
        // Don't use spaces before or after unary operators: !, !!, ++, --, ~
        "space-unary-ops": [
            "error"
        ],
        // Operator should be used before new line
        "operator-linebreak": [
            "error",
            "after"
        ],
        // You have 2 options names for context variables: "that", "self"
        "consistent-this": [
            "error",
            "that",
            "self"
        ],
        // We are not checking for first capital letter on object properties
        // Otherwise $.Deferred(); will be an error
        "new-cap": [
            "error",
            {
                "properties": false
            }
        ],
        // require can be used not oly in the beginning of the file
        "global-require": 0,
        // It's not required to move each chain element to new line
        "newline-per-chained-call": 0,
        // Only warn if there is no check for hasOwnProperty inside `for in`
        "guard-for-in": [
            "warn"
        ],
        // Warning if there is empty block
        "no-empty": [
            "warn"
        ],
        "no-prototype-builtins": 0,
        // I don't feel like disallowing `++` is what will "save the day"
        "no-plusplus": 0,
        // We're using sagas, therefore we will use infinite loops like `while(true) {}`
        "no-constant-condition": 0,
        // Some methods of react components can be used without `this`
        // For exampe:
        // * I just want to manipulate values that they use.
        // * Method is rendering part of DOM of the component
        // * render() returning `null` in case I don't want component to have visual part (Controllers)
        "class-methods-use-this": 0,
        // Dangle comma in functions cause error in ES6.
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }],
        // Usage of `Math.pow` will not emit error (** operator is not available in es6)
        "no-restricted-properties": [
            "warn",
        ],
        // We're allowing multiple spaces before comments.
        // This way you can align comment in one column
        // For example:
        // const foo = 1;          // explanation
        // const someLongName = 2; // some additional explanation
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true
            }
        ],
        // Arguments could be passed to the function in multiple lines.
        // For example:
        // foo(
        //    bar,
        //    baz,
        //    qux
        // );
        "function-paren-newline": ["error", "consistent"],
        // Some global variables should be restricted
        // Global variable "event" should not be used
        // "fdescribe" is part of testing framework
        // "fit" is part of testing framework as well
        "no-restricted-globals": [
            "error",
            {
                "name": "event",
                "message": "Use local parameter instead."
            },
            {
                "name": "fdescribe",
                "message": "Do not commit 'fdescribe'. Use describe instead."
            },
            {
                "name": "fit",
                "message": "Do not commit 'fit'. Use describe instead."
            }
        ],
        // Objects can be created in one line
        "object-curly-newline": ["error", { "consistent": true }],
        // We don't force to use object destructuring
        // Following form still looks better
        // ``` const length = someArray.length; ```
        // then this one:
        // ``` const { length } = someArray; ```
        "prefer-destructuring": ["warn"],

        /*---# PLUGINS ---*/

        /*---## react ---*/

        "react/jsx-indent-props": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-closing-bracket-location": 0,
        "react/prefer-stateless-function": 0,
        "react/no-did-mount-set-state": 0,
        "react/jsx-pascal-case": 0,
        "react/jsx-no-bind": 0,
        "react/require-default-props": ["warn"],
        // It's wrong to use pure index as key, but it's okey to wrap it in unique string
        // `unique-key-${key}`
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        "react/no-array-index-key": ["warn"],
        "react/prop-types": 0,
        // For now this property is not usefull
        // It can't really determine which property is used and which is not
        "react/no-unused-prop-types": ["warn"],
        "react/jsx-indent": [
            "error",
            4
        ],
        // It's not always more readable - to write one exception per line
        // But it should be something that is nice to have in general
        "react/jsx-one-expression-per-line": ["warn"],
        // I disagree that we should enforce destructuring of `this.state` or `this.props`
        "react/destructuring-assignment": [0],
        // It's no always error,
        // but it's good to have warning about accessing state and setting it in the same function
        "react/no-access-state-in-setstate": ["warn"],
        // I want to be able to write render function outside of the class and the use them inside with `bind()`
        // In this case I will use `this` inside such function.
        "react/no-this-in-sfc": ["warn"],

        /*---## import ---*/

        // Requiring of images and styles
        "import/no-unresolved": 0,
        // In redux we have following pattern:
        // export default connect()(Component);
        // And this property will trigger error
        "import/no-named-as-default": 0,
        // You can import devDependencies, as well as dependencies, there is no problems with it
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": [
            "warn"
        ],

        /*---## jsx-a11y ---*/

        // I don't see problem with using `onClick` on `div` elements
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        // We allowing to use "onClick" events on various elements
        // like "div", "span", etc
        "jsx-a11y/click-events-have-key-events": ["warn"],
        // Check valid "href" attributes on "a" tag.
        // But do not use it in "Link" components.
        "jsx-a11y/anchor-is-valid": [ "error", {
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }],
        // "onMouseOut must be accompanied by onBlur for accessibility"
        // not an error, just warning
        "jsx-a11y/mouse-events-have-key-events": ["warn"],
    }
};
