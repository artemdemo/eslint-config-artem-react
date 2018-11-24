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

## How correctly upgrade those configs

*Notice*, this project does not uses `yarn.lock` since in order to correctly update it we need to run specific command,
that will rely on `npm-lock`.

In order to upgrade them you will need to use specific versions of each dependency.
See [airbnb package page](https://www.npmjs.com/package/eslint-config-airbnb) for more information.
