# StyleTypeThing

JavaScript style guide and ESLint config.

The purpose of this project is to document the reasonings behind my JavaScript style preferences so that when I arbitrarily change my mind a month from now I can wonder why I even bothered.

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

My preference is to favor `let` over `const`, only using the latter when all of the following conditions are met:

1. The value is a primitive (or a frozen object with primitive properties only).
1. The value is known at build time.
1. The value should definitely never change during execution.

The name of a `const` should be in all caps with words separated by underscores.

Valid formats:

```js
const FRONT_MAN_FOR_FOO_FIGHTERS = "Dave Grohl";

const DURATION = Object.freeze({
  SHORT: Symbol(),
  LONG: Symbol(),
  EVERLONG: Symbol(),
});
```

I fear that my style is not a popular one. The prevalent opinion among the JavaScript community is to favor `const` over `let`, only using the latter when there exists at least one reachable codepath which reassigns the variable to a different value. And to their credit, this opinion is perfectly in line with the spec.

But it also creates a problem. Consider the following example:

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
bieber.hasPrettyFace = false; // Valid
```

What the hell, B? You were supposed to stay beautiful forever :(

My problem is that even though I understand that `const` deals with variable reassignment, not value mutability, my brain wants it to deal with both.

My brain wants this...

```js
const artist = {name: "Prince"};

artist.name = Symbol("Love"); // Valid
```

...to work the same way as this...

```js
const artist = "Prince";

artist = Symbol("Love"); // Invalid
```

The fact that they don't work the same way (and never could without introducing some seriously weird behavior with nested objects) adds a small cognitive cost to the `const` statement. Unfortunately, the benefits of favoring `const` over `let` are also small--too small to afford any kind of associated cost. That's why some people have a problem with `const` merely on the grounds that it contains two extra characters.

It just ain't worth it.

## == VS ===

My current feeling is that `===` should be favored over `==` due to the small cognitive cost of having to consider the possibility of an unexpected type coercion for each and every equality comparison that I make.

However, it's worth noting that I've gone back and forth on this issue several times. An argument could be made that performing this extra consideration for each comparison promotes better understanding of both the code being written as well as the language itself.

Plus `===` looks funny.

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

I'm a huge fan of the ternary operator, especially when it's nested within another ternary operator or ten. It offends me greatly that there's both a no-ternary and a no-nested-ternary rule in ESLint. Setting these values to 0 isn't enough. I recommend `-20`. Also don't be led astray by the no-unneeded-ternary rule; the ternary operator is **_ALWAYS_** needed. For this value I recommend `NaN === NaN ? 2 : 0`.

Joking aside, I actually have grown rather fond of our ternary friend. Even when it's nested. But only when the following rules apply:

1. Each `cond ? expr` pair must fit on its own line. The `: expr` may either be on the same line or the next.
1. Multi-line statements aren't indented; the `:` serves as the indent.
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
