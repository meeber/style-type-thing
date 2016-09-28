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
npm install --save-dev eslint eslint-plugin-babel babel-eslint
```

## Usage

Modify the "extends" directive in your ESLint config file to include "tt".

Example .eslintrc.yml:

```yaml
parser: babel-eslint
parserOptions:
  ecmaVersion: 7
  sourceType: module
env:
  es6: true
  node: true
extends: eslint-config-tt
```

Example test/.eslintrc.yml:

```yaml
env:
  mocha: true
rules:
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

If this was 1997, there'd be a few "Under Construction" GIFs and a marquee tag.

## var VS let VS const

`var` and I had a good run but it's over now and there's no turning back.

Prior to v3.0.0 of this guide, it was my preference to favor `let` over `const` because of my inner English Major wanting the word "constant" to prevent both a variable from being reassigned as well as an object's properties from being mutated.

I've changed my mind. I now follow these rules:

1. Use `const` when a variable should never be reassigned. Otherwise use `let`.
1. Never reassign function parameters.
1. Name constants in all caps with words separated by underscores when the value is known at build time.
1. Use `Object.freeze` when all of a constant's properties are known at build time and should never be reassigned.

Valid formats:

```js
const favoriteBand = requestFavoriteBand();

const FRONT_MAN_FOR_FOO_FIGHTERS = "Dave Grohl";

const DURATION = Object.freeze({
  SHORT: Symbol(),
  LONG: Symbol(),
  EVERLONG: Symbol(),
});
```

## == VS ===

My current feeling is that `===` should be favored over `==` due to the small cognitive cost of having to consider the possibility of an unexpected type coercion for each and every equality comparison that I make.

However, it's worth noting that I've gone back and forth on this issue several times. An argument could be made that performing this extra consideration for each comparison promotes better understanding of both the code being written as well as the language itself.

Plus `===` looks funny.

## \` VS ' VS "

When embedding an expression inside of a string, I favor `` ` `` over string concatenation. Otherwise, I use `"` exclusively, even if the string contains double quotes which must then be escaped.

The advantages are small:

* `"` is consistent with JSON.
* Not needing to escape apostrophes is worth needing to escape double quotes.
* `'` looks too much like `` ` ``.

I omit quotations when they're not necessary.

Valid formats:

```js
// No quotes for properties
let stockton = {speed: 5, threePtrs: 5, dunks: 0, defense: 4};

// Except when required
let malone = {speed: 5, "three ptrs": 1, dunks: 6, defense: 4};

// Double quotes in bracket notation
pippen["speed"] = 5;

// Double quotes for strings
let phrases = ["He's heating up!", "He's on fire!", "Boomshakalaka!"];

// Double quotes even if a double quote must be escaped
let question = "Announcer: \"Is it the shoes?\"";

// Template literal when embedding an expression
let endOf = `END OF ${quarter} QUARTER`;
```

## Line Length

I'm an advocate of the 80-character line. My feeble brain rejects lines that are much longer. Also I like having two PuTTY windows open side-by-side on the same monitor with a comically large (14pt) Consolas font.

In general, I don't break a statement across multiple lines unless I have to.

If an array literal, object literal, or parameter list exceeds the 80-character limit, then I move each item onto its own indented line.

If a string exceeds the limit, then I concat it across multiple lines.

Valid formats:

```js
// <= 80 characters
var snacks = ["Dunkaroos", "Fruit Gushers", "Cheetos Paws", "Bagel Bites"];

// > 80 characters
var drinks = [
  "Squeezit",
  "Little Hug Fruit Barrels",
  "Capri Sun",
  "Yoo-hoo",
  "Steel Reserve 211",
];

// > 80 characters
var dilemma = "Has Anyone Really Been Far Even as Decided to Use Even Go Want"
            + " to do Look More Like?";
```

## Indent

I'll always cherish my time in callback hell, for it taught me the beauty of the 2 space indent.

In a previous version of this guide, I advocated using operators such as `&&` in lieu of two spaces when applicable, and I stressed the importance of resisting the temptation to add extra spaces in an attempt to achieve some kind of cute alignment.

I've changed my mind on both accounts. I now always use 2-space indents regardless of operators, and I've succumbed to the temptation of adding extra spaces (within reason) to achieve alignment. Cuteness prevails.

Valid formats:

```js
// 2 space indent
function JohnMadden() {
  console.log("JohnMadden");

  // Being cute with extra spaces at the cost of a few Maddens
  console.log("JohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohn"
            + "MaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMadd"
            + "enJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMadden");

  // No cute indent; it'd be too restrictive to start string so far to the right
  let brandNewJohnMaddenPlushie = getBrandNewJohnMaddenPlushie("footballfootbal"
    + "footballfootballfootballfootballfootballfootballfootballfootballfootba");
}

function isLog(val) {
  // More being cute with extra spaces
  return rollsDownStairs(val)
      && isAloneOrInPairs(val)
      && rollsOverYourNeighborsDog(val)
      && isGreatForASnack(val)
      && fitsOnYourBack(val)
      && isLogLogLog(val);
}

// Nested indents
let why = {
  would: {
    anyone: {
      do: {
        such: {
          a: {
            thing: {
              as: this,
            },
          },
        },
      },
    },
  },
};

```

## Ternary Operator

I'm a huge fan of the ternary operator, especially when it's nested within another ternary operator or ten. It offends me greatly that there's both a no-ternary and a no-nested-ternary rule in ESLint. Setting these values to 0 isn't enough. I recommend `-20`. Also don't be led astray by the no-unneeded-ternary rule; the ternary operator is **_ALWAYS_** needed. For this value I recommend `NaN === NaN ? 2 : 0`.

Joking aside, I actually have grown rather fond of our ternary friend. Even when it's nested. But only when the following rules apply:

1. Each `cond ? expr` pair must fit on its own line. The `: expr` may either be on the same line or the next.
1. Multi-line statements are aligned based on the first condition
1. No unnecessary parentheses; because of the first rule, it's rare to have to consider more than two operators at a time.

Valid formats:

```js
let val = cond ? expr1 : expr2;   // If cond, expr1, else expr2

let val = cond ? expr1            // If cond, expr1
        : expr2;                  // Else expr2

let val = cond1 ? expr1           // If cond1, expr1
        : cond2 ? expr2           // Else if cond2, expr2
        : cond3 ? expr3           // Else if cond3, expr3
        : cond4 ? expr4           // Else if cond4, expr4
        : expr5;                  // Else expr5
```

Examples:

```js
// Meh
function isDrinkable(milk, drinker) {
  return !isExpired(milk) && !isLactoseIntolerant(drinker) && (
           (isBrownish(milk) && isActuallyYoohoo(milk) && !hatesFun(drinker)) ||
           (isInABag(milk) && isCanadian(drinker)) ||
           hasCookies(drinker)
         );
}

// Better but excessive parentheses and repetition of "return"
function isDrinkable(milk, drinker) {
  if (isExpired(milk) || isLactoseIntolerant(drinker)) return false;
  if (isBrownish(milk)) return isActuallyYoohoo(milk) && !hatesFun(drinker);
  if (isInABag(milk)) return isCanadian(drinker);
  return hasCookies(drinker);
}

// Better. Consider each line on its own: "if cond, return expr"
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
