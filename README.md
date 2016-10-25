[![build status](https://img.shields.io/travis/meeber/style-type-thing.svg)](https://travis-ci.org/meeber/style-type-thing)
[![npm version](https://img.shields.io/npm/v/eslint-config-tt.svg)](https://www.npmjs.com/package/eslint-config-tt)

# StyleTypeThing

JavaScript style guide and ESLint config.

## Introduction

This project contains my personal ESLint config. Every rule in ESLint is documented in the config file, regardless of whether it's enabled or disabled. Documentation includes justification of each rule, along with guidance on how to adhere to the rule. In some instances, this documentation amounts to little more than paraphrasing of the official ESLint documentation. However, in many cases, there are fresh insights to be gained.

## Can this help you?

It's unlikely that this ESLint config will perfectly suit your tastes. Many of the rules are subjective, some extremely so. That's OK, because this project isn't intended to serve as the standard for anyone's projects but my own. But that doesn't mean it can't be of any use to you. An enormous amount of time went into the research and deliberation of these rules, and it's possible that my documented conclusions can assist you in defining your own ESLint config, even if it ends up being contrary to mine.

## Values

My values in terms of code style have changed significantly over the years as I progressed from creating solo projects at home, to writing software at work that needed to be understood, debugged, and modified by system administrators, to finally working on popular open source libraries that are both used and contributed to by developers of widely varying skill levels and ideologies.

From strongest to weakest, here's how I rank my values:

1. Correctness
2. Expressiveness
3. Debuggability
4. Accessibility
99. Aesthetics
100. Performance

### Correctness

Obviously the code has to work. Otherwise, what's the point?

### Expressiveness

Good code doesn't create doubt in the minds of other developers, or my future self. Instead, it expresses intent. And when intent can't be sufficiently expressed through code alone, then it's supplemented with comments.

Many of my ESLint rule decisions were made on the basis of eliminating ambiguity and doubt. I never want someone who is debugging my code to pause and wonder if the logic I implemented was intentional, or if perhaps I meant to add a couple of parentheses here, or a semicolon there. 

However, there's a cost to expressiveness: verbosity. Many of my style preferences result in longer code, which can be frustrating, especially for those who place a lot of value in aesthetics. For me, the cost is worth the benefit.

### Debuggability

Some of my most painful ESLint rule decisions involved sacrificing aesthetics in exchange for improved debuggability. Usually the benefit comes in the form of more informative stack traces. Debugging is so important to the development process that I'm unwilling to make any sacrifices in this area without tremendous value in return.

### Accessibility

Every new thing that's added to a project, whether it be a language feature, quirk, framework, or library, reduces the accessibility of the code. Sometimes all that's gained in return is better aesthetics or performance. This isn't a good exchange.

At work, I need my code to be understood by non-developers. In open source, I want developers of all skill levels to contribute to my projects. That means being conservative when it comes to adding new things to my projects. But it doesn't mean avoiding them completely.

The question isn't: "Does this new thing add any value?"
The question is: "Does this new thing add enough value?"

And sometimes the answer is yes.

### Aesthetics

It was startling to realize how many of my former style preferences were based purely on aesthetics, often to the detriment of my more highly-rated values. It was even more startling to experience how hard it was to let go of those old style preferences, even after recognizing their cost.

Aesthetics matter. Readability matters. It feels good--almost poetic--to read and write beautiful code. But improved aesthetics cannot come at the cost of more important values, no matter the temptation.

### Performance

Most of the time, performance simply doesn't matter. Or rather, a small gain in performance isn't worth whatever sacrifice must be made to achieve it. Most of the time.

But there are exceptions. Performance is the one value that can suddenly and drastically increase in priority, all the way from last to first, not replacing correctness but rather combining with it. That's because when there's a problem with performance, it's usually so severe that the software no longer fulfills its requirements; the software is no longer correct. In such cases, the performance problem must be fixed at any cost.

In some projects, performance is so critical that it should be assumed forever intertwined with correctness. But for the vast majority of projects, in the vast majority of situations, no other value should be sacrificed in the name of performance.

## Warning

My ESLint config is frequently updated as new versions of ESLint are released, as well as when I learn new things, or change my mind about existing rules.

## Installation

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
extends: tt
env:
  node: true
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
