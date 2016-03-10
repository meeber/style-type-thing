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

## var VS let VS const

`var` and I had a good run but it's over now and there's no turning back. From this point on, it's just me and `let` and that deceptive _expletive deleted_ `const`.

My preference is to only use `const` when I want to draw extra special attention to the notion that a variable and everything related to that variable should never change. For example:

```js
const FRONT_MAN_FOR_FOO_FIGHTERS = "Dave Grohl";
```

Unfortunately, that's not what `const` actually means in JavaScript. Consider the following:

```js
function MusicalGenius(hasPrettyFace) {
  this.hasPrettyFace = hasPrettyFace;
}

const bieber = new MusicalGenius(true);
```

When I look at this code, I think: "that bieber is a Musical Genius with a pretty face, and he'll always remain that way." And I find myself smiling in agreement.

But then I'm stung by a bitter cold reality:

```js
bieber.hasPrettyFace = false;    // Valid
```

I... I feel so... so deceived! With my beloved bieber deprived of his beauty with one cruel statement, how am I to ever trust `const` or life in general again?

My only comfort:

```js
bieber = new JonBonJovi(true);  // Invalid
```

Pretty face or not, at least bieber will forever remain a MusicalGenius thanks to the awesome power of `const`. Is the protection against reassignment a strong enough reason to favor `const` over `let`? Popular opinion says "yes". After all, it only costs two extra characters. Right?

```js
// The favor-over-let scale
const donkey = {};
always donkey = {};
forever donkey = {};
timeless donkey = {};
immutable donkey = {};
invariable donkey = {};
unalterable donkey = {};
unmodifiable donkey = {};
canneverbechangediswear donkey = {};
```

## Line Length

I'm an advocate of the 80-character line. My feeble brain rejects lines that are much longer. Also I like having two PuTTY windows open side-by-side on the same monitor with a relatively large (12pt) font.

In general, I don't break a statement across multiple lines unless I have to. But if an array literal, object literal, or parameter list exceeds the 80-character limit, then I move each item onto its own indented line. If a string exceeds the limit, then I concat it across multiple lines with the `+ ` placed after the linebreak with no additional indent.

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

If JavaScript taught me anything in life, it's that the 2 character indent is beautiful. I say "character" instead of "space" because I'm of the opinion that operators such as `: `, `+ `, `&&`, and `||` should serve as the indent when applicable.

One of my most recent self-imposed rules is: No trying to be cute by adding extra spaces to line stuff up.

Valid formats:

```js
// 2 space indent
function JohnMadden() {
  console.log("JohnMadden");

  // "+ " serves as the indent
  console.log("JohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohn"
  + "MaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMadd"
  + "enJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMadden");
}

function isLog(val) {
  // "&&" serves as the indent
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

I'm a huge fan of the ternary operator, especially when it's nested within another ternary operator or ten. It offends me greatly that there's both a no-ternary and a no-nested-ternary rule in ESLint. Setting these values to 0 isn't enough. I recommend `-20`. Also don't be led astray by the no-unneeded-ternary rule; the ternary operator is **_ALWAYS_** needed. For this value I recommend `NaN == NaN ? 2 : 0`.

Joking aside, I actually have grown rather fond of our ternary friend. Even when it's nested. But only when the folling rules are applied:

1. Each `cond ? expr` pair must fit on its own line. The `: expr` may be on either the same line or the next.
1. Multi-line statements aren't indented; the `: ` serves as the ident.
1. No unnecessary parentheses; because of the first rule, it's rare to have to consider more than two operators at a time.

Valid formats:

```js
cond ? expr1 : expr2;   // If cond, expr1, else expr2

cond ? expr1            // If cond, expr1
: expr2;                // Else expr2

cond1 ? expr1           // If cond1, expr1
: cond2 ? expr2         // Else if cond2, expr2
: cond3 ? expr3         // Else if cond3, expr3
: cond4 ? expr4         // Else if cond4, expr4
: expr5;                // Else expr5
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
