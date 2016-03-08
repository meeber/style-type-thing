# StyleTypeThing

JavaScript style guide and ESLint config.

Don't take it personally; they're just semicolons and curly braces.

# ESLint Config

## Install

```
npm install eslint-config-tt --save-dev
```

And if you haven't already:

```
npm install eslint --save-dev
```

## Usage

Modify the "extends" directive in your ESLint config file to include "tt".

Example .eslintrc.js:

```js
module.exports = {
  parserOptions: {ecmaVersion: 7, sourceType: "module"},
  env: {node: true, es6: true},
  extends: "tt",
};
```

Example test/.eslintrc.js:

```js
module.exports = {
  env: {mocha: true},
  rules: {
    "func-names": 0,
    "no-unused-expressions": 0,
  },
};
```

Example .eslintignore:

```
dist/
```

Example package.json:
```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

Now run:

```
npm run lint
```

# Style Guide

Later.

# Beware

* I'm an English major.
* I like E. E. Cummings.
* I change my mind all the time.

# License

MIT

# GLHFDD
