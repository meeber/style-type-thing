# StyleTypeThing

JavaScript style guide and ESLint config.

The purpose of this project is to document the reasoning behind my JavaScript style preferences so that when I change my mind a month from now I can wonder why I even bothered.

# ESLint Config

## Install

```
npm install eslint-config-tt --save-dev
```

And if you haven't already `npm install eslint --save-dev`

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

Now run `npm run lint`

# Style Guide

If this was 1997, there'd be a few "Under Construction" GIFs and a marquee tag.

## Ternary Operator

I'm a huge fan of the ternary operator, especially when it's nested within another ternary operator or ten. It offends me greatly that there's both a "no-ternary" and a "no-nested-ternary" rule in ESLint. Setting these values to 0 isn't enough. I recommend `-20`. Also don't be led astray by the "no-unneeded-ternary" rule; the ternary operator is **_ALWAYS_** needed. For this value I recommend `NaN == NaN ? 2 : 0`.

```js
// Baaaaaaaaaaaad:
function isDrinkable(milk, drinker) {
  return !isExpired(milk) && !isLactoseIntolerant(drinker) && (
    (isBrownish(milk) && isActuallyYoohoo(milk) && !hatesFun(drinker))
    || (isInABag(milk) && isCanadian(drinker))
    || hasCookies(drinker)
  );
}

// Baaaaaaaaaaaad:
function isDrinkable(milk, drinker) {
  if (isExpired(milk) || isLactoseIntolerant(drinker)) return false;
  if (isBrownish(milk)) return isActuallyYoohoo(milk) && !hatesFun(drinker);
  if (isInABag(milk) return isCanadian(drinker);
  return hasCookies(drinker);
}

// Baaaaaaaaaaaad:
function isDrinkable(milk, drinker) {
  return isExpired(milk) || isLactoseIntolerant(drinker) ? false
  : isBrownish(milk) ? isActuallyYoohoo(milk) && !hatesFun(drinker)
  : isInABag(milk) ? isCanadian(drinker)
  : hasCookies(drinker);
}

// Gooooooooooood:
function isDrinkable(milk, drinker) {
  return isActuallyYoohoo(milk);
}
```

In all seriousness, I do like the ternary operator (even nested) as long as every condition-expression pair fits on an 80-width line. I don't like indenting the multi-line statements; doing so wastes space and doesn't add much over the indentation that already occurs with ": ". Examples:

```js
// Good
return cond ? expr1 : expr2;

// Good
return cond ? expr1
: expr2;

// Good
return cond1 ? expr1
: cond2 ? expr2
: cond3 ? expr3
: cond4 ? expr4
: expr5;
```

# Beware

* I'm an English major.
* I like E. E. Cummings.

# License

MIT

# GLHFDD
