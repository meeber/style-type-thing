# StyleTypeThing

JavaScript style guide and ESLint config.

The purpose of this project is to document the reasonings behind my JavaScript style preferences so that when I change my mind a month from now I can wonder why I even bothered.

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

`var` and I had a good run but it's over now and there's no turning back. From this point on, it's just me and `let` and the loveable yet somewhat misleading `const`.

My preference is to only use `const` when I want to draw extra special attention to the fact that something will never change. For example:

```js
const FRONT_MAN_FOR_FOO_FIGHTERS = "Dave Grohl";
```

The good news is that this code works as intended: Dave Grohl is and always will be the front man for Foo Fighters. The bad news is that it only works as intended because "Dave Grohl" is a primitive data type. Consider the following example with an object instead of a primitive:

```js
class MusicalGenius {
  constructor (hasPrettyFace) {
    this.hasPrettyFace = hasPrettyFace;
  }
}

const bieber = new MusicalGenius(true);
```

When I look at this code, I think: "bieber is a Musical Genius with a pretty face, and he'll always remain that way." And I find myself smiling in agreement.

But then something like this happens:

```js
bieber.hasPrettyFace = false;   // Valid
```

What the fuck. Bieber was my rock--my one and only constant in life--and yet all it took was a single cruel statement to deprive him of his beauty. How am I to ever trust `const` or my heart again?

My only comfort:

```js
bieber = new JonBonJovi(true);  // Invalid
```

What `const` does is prevent a variable from being reassigned; it doesn't prevent the value it's currently assigned to from changing. That's why bieber can lose his pretty face but can't shift from being a MusicalGenius to being a JonBonJovi.

But then why is "Dave Grohl" guaranteed to always remain the front man of Foo Fighters? First off, he's a bad mfer. And secondly, unlike objects, all primitive data types in JavaScript are automatically immutable, regardless if a variable is declared with `var`, `let`, or `const`.

```js
// "Prince" is immutable because it's a string primitive
let artist = "Prince";

// Valid. Reassign artist to a new string primitive. "Prince" isn't modified but
// since artist will no longer reference it, it's as good as gone
artist = "The Artist Formerly Known as Prince"; 

// Valid. Reassign artist to a new symbol primitive
artist = Symbol("Love");
```

```js
// "Prince" is immutable because it's a string primitive, and artist can never
// be reassigned due to const
const artist = "Prince";

// Invalid due to const
artist = "The Artist Formerly Known as Prince";

// Invalid due to const
artist = Symbol("Love");
```

The prevalent opinion among the JavaScript community is that you should only use `let` when you intend on reassigning a variable to something else later on, and that `const` should be favored in all other situations, even when declaring a mutable object, such as with the bieber example above.

I disagree. I don't think `const` should be used to declare an object that has properties which are intended to change. It's misleading and the cognitive cost of seeing through this deception isn't worth the minor benefit of protection against accidental reassignment.

And besides, it's two extra characters long!!!

```js
// New keywords slated for ES2017
always Yes = {members: [...]};
forever Yes = {members: [...]};
everlong Yes = {members: [...]};
immutable Yes = {members: [...]};
invariable Yes = {members: [...]};
unalterable Yes = {members: [...]};
unmodifiable Yes = {members: [...]};
doesnotchange Yes = {members: [...]};
noreallyyoucantrustmethiswilldefinitelystaythesame Yes = {members: [...]};
```

## Line Length

I'm an advocate of the 80-character line. My feeble brain rejects lines that are much longer. Also I like having two PuTTY windows open side-by-side on the same monitor with a comically large (14pt) Consolas font.

In general, I don't break a statement across multiple lines unless I have to.

If an array literal, object literal, or parameter list exceeds the 80-character limit, then I move each item onto its own indented line.

If a string exceeds the limit, then I concat it across multiple lines with the `+` placed at the start of each new line.

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

I'll always cherish my time in callback hell, for it taught me the beauty of the 2 character indent. I say "character" instead of "space" because I'm of the opinion that operators such as `:`, `+`, `&&`, and `||` should serve as the indent in some situations. I'm also of the opinion that one must always resist the temptation to add a bunch of extra spaces to the start of each line in order to achieve some kind of cute alignment.

Valid formats:

```js
// 2 space indent
function JohnMadden() {
  console.log("JohnMadden");

  // "+ " serves as the indent; adding 2 spaces before it would decrease the
  // number of "JohnMadden"s per line while adding nothing of value in return
  console.log("JohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohn"
  + "MaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMadd"
  + "enJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMaddenJohnMadden");
}

function isLog(val) {
  // "&&" serves as the indent; fight the urge to add 4 spaces before each &&
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

Joking aside, I actually have grown rather fond of our ternary friend. Even when it's nested. But only when the following rules apply:

1. Each `cond ? expr` pair must fit on its own line. The `: expr` may be on either the same line or the next.
1. Multi-line statements aren't indented; the `: ` serves as the indent.
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
