[![build status](https://img.shields.io/travis/meeber/style-type-thing.svg)](https://travis-ci.org/meeber/style-type-thing)
[![npm version](https://img.shields.io/npm/v/eslint-config-tt.svg)](https://www.npmjs.com/package/eslint-config-tt)

# StyleTypeThing

JavaScript style guide and ESLint config.

The purpose of this project is to document the reasonings behind my JavaScript style preferences so that when I arbitrarily change my mind a month from now I can wonder why I even bothered.

# ESLint Config

## Install

```
npm install --save-dev eslint-config-tt
```

And if you haven't already:

```
npm install --save-dev eslint
```

## Usage

Modify the "extends" directive in your ESLint config file to include "tt".

Example .eslintrc.yml:

```yaml
env:
  node: true
extends: eslint-config-tt
```

Example test/.eslintrc.yml:

```yaml
env:
  mocha: true
rules:
  func-names: off
  no-unused-expressions: off
```

Example package.json:

```json
{
  "scripts": {
    "lint": "eslint --fix ."
  }
}
```

Now run `npm run lint`

# Style Guide

Work in progress. 
