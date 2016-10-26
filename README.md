[![build status](https://img.shields.io/travis/meeber/style-type-thing.svg)](https://travis-ci.org/meeber/style-type-thing)
[![npm version](https://img.shields.io/npm/v/eslint-config-tt.svg)](https://www.npmjs.com/package/eslint-config-tt)

# StyleTypeThing

JavaScript style guide and ESLint config.

## Introduction

This project contains my personal ESLint config. Every ESLint rule is documented in the config file, regardless of whether or not it's enabled. Documentation includes justification of each rule, along with guidance on how to follow the rule. In some instances, this documentation amounts to little more than paraphrasing of the official ESLint documentation. However, in many cases, there are fresh insights to be gained.

## Can this help you?

It's unlikely that this ESLint config will perfectly suit your tastes. Many of the rules are subjective, some extremely so. That's OK, because this project isn't intended to serve as the standard for anyone's projects but my own. But that doesn't mean it can't be of any use to you. An enormous amount of time went into the research and deliberation of these rules, and it's possible that the resulting documentation can help you to define your own ESLint config, even if it ends up being contrary to mine.

## Values

My values have changed significantly over the years as I've progressed from creating solo projects at home, to writing software at work that must be understood, debugged, and modified by system administrators (instead of developers), to finally working on popular open source libraries that are both used and contributed to by developers of widely varying skill levels and ideologies.

Ranked by priority, I value:

1. Correctness
1. Debuggability
1. Testability
1. Expressiveness
1. Conventionality
1. Accessibility
1. Elegance
1. Performance

### Correctness

Obviously, the code has to work.

Many ESLint rules help catch bugs before they even reach tests.

### Debuggability

When things go wrong, we need to find out why. Quickly. There's more urgency involved with debugging than any other aspect of software development. Therefore, it's critical to optimize code in terms of debuggability. To make even a small sacrifice in debuggability, there must be tremendous gain elsewhere.

At a low level, debuggability is often about writing code that generates informative stack traces when something goes wrong. One of the biggest issues with frameworks is the way they obfuscate stack traces.

At a high level, debuggability is about the overall architect of the application. A debuggable application is modularized with clear separations of concerns between components.

ESLint rules related to debuggability exist only at a low level.

### Testability

There aren't many ESLint rules that impact testability, but it's still worth noting that writing testable code is a requirement for maintaining correctness. In particular, code must be modularized with clearly defined contracts. This facilitates unit testing and stubbing.

### Expressiveness

Good code doesn't create doubt in the minds of other developers, or our future selves. Instead, it expresses intent. And when intent can't be sufficiently expressed through code alone, then it's supplemented with comments.

Many ESLint rules work to eliminate ambiguity and doubt. However, there's a cost to expressiveness: verbosity. The extra code that often accompanies an expressive style can be frustrating, especially for those who place a lot of value in elegance. But the cost is worth the benefit.

### Conventionality

Also known as the principle of least surprise, what this value boils down to is not defying the expectations of other developers. If something works a certain way in other applications, then it should work the same way in our applications.

Many ESLint rules disallow practices that create confusion, such as modifying builtin globals.

### Accessibility

Every new thing that's added to a project, whether it be a language feature, framework, or library, reduces the accessibility of the code. Sometimes all that's gained in return is elegance or performance. This isn't a good exchange.

The question isn't: "Does this new thing add any value?"

The question is: "Does this new thing add enough value?"

Sometimes the answer is yes. But often it's no.

Many ESLint rules disallow language features or quirks that add more complexity than value.

### Elegance

Elegance in code matters. It just doesn't matter as much as other values.

Many ESLint rules disallow language features or coding styles that achieve conciseness but at too high of a cost in terms of other values.

### Performance

Performance doesn't matter. Most of the time. Or rather, a small gain in performance usually isn't worth whatever sacrifice that must be made to achieve it.

But there are exceptions. Performance is the one value that can suddenly and drastically increase in priority, all the way from last to first, not replacing correctness but rather combining with it. That's because when there's a problem with performance, it's usually so severe that the software no longer fulfills its requirements, and is thus no longer correct. In such cases, the performance problem must be fixed at any cost.

In some projects, performance is so critical that it should be assumed forever intertwined with correctness. But for the vast majority of projects, in the vast majority of situations, no other value should be sacrificed in the name of performance.

There aren't any ESLint rules that directly address performance.

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
