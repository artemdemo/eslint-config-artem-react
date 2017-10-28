# Eslint config for react projects

Config based on [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) and [`eslint-config-artem`](https://www.npmjs.com/package/eslint-config-artem)

In order to use it just add file `.eslintrc` to the root folder of your project:

```
{
    "extends": "artem-react"
}
```

Also install `esilnt`

```
$ npm i eslint --save-dev
```

## Experimental features
In order to use new language features (like dynamic `import()`) you will need to use different parser: `babel-parser`

```
$ npm install --save-dev babel-parser
```

```
{
    "extends": "artem-react",
    "parser": "babel-eslint"
}
```
