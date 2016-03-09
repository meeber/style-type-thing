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

Joking aside, I actually do like the ternary operator. Even when it's nested.

The rules I follow are:

1. Each condition-expression pair must fit on its own line.
1. Multi-line statements aren't indented; the ": " provides indentation.
1. No unnecessary parenthesis; because of the first rule, it's rare to have to consider more than two operators at a time.

Allowed formats:

```js
return cond ? expr1 : expr2;  // If cond, return expr1, else return expr2

return cond ? expr1           // If cond, return expr1
: expr2;                      // Else return expr2

return cond1 ? expr1          // If cond1, return expr1
: cond2 ? expr2               // If cond2, return expr2
: cond3 ? expr3               // If cond3, return expr3
: cond4 ? expr4               // If cond4, return expr4
: expr5;                      // Else return expr5
```

Examples:

```js
// Meh
function isDrinkable(milk, drinker) {
  return !isExpired(milk) && !isLactoseIntolerant(drinker) && (
    (isBrownish(milk) && isActuallyYoohoo(milk) && !hatesFun(drinker))
    || (isInABag(milk) && isCanadian(drinker))
    || hasCookies(drinker)
  );
}

// Better but excessive parentheses and repetition of "return"
function isDrinkable(milk, drinker) {
  if (isExpired(milk) || isLactoseIntolerant(drinker)) return false;
  if (isBrownish(milk)) return isActuallyYoohoo(milk) && !hatesFun(drinker);
  if (isInABag(milk) return isCanadian(drinker);
  return hasCookies(drinker);
}

// Better. Just consider line-by-line: "if cond, return expr" until final else
function isDrinkable(milk, drinker) {
  return isExpired(milk) || isLactoseIntolerant(drinker) ? false
  : isBrownish(milk) ? isActuallyYoohoo(milk) && !hatesFun(drinker)
  : isInABag(milk) ? isCanadian(drinker)
  : hasCookies(drinker);
}

// Best
function isDrinkable(milk, drinker) {
  return isActuallyYoohoo(milk);
}
```

# Beware

* I'm an English major.
* I like E. E. Cummings.

# License

MIT

# GLHFDD
