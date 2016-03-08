module.exports = {
  rules: {
    // Possible Errors
    "comma-dangle": [2, "always-multiline"],
    "no-cond-assign": [2, "always"],
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 0,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "all"],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "both"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 0,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,

    // Best Practices
    "accessor-pairs": 0,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    complexity: 0,
    "consistent-return": 2,
    curly: [2, "multi-line"],
    "default-case": 0,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    eqeqeq: 0,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 0,
    "no-else-return": 2,
    "no-empty-function": 0,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 0,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-process-env": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-warning-comments": 1,
    "no-with": 2,
    radix: 0,
    "vars-on-top": 0,
    "wrap-iife": 2,
    yoda: [2, "never"],

    // Strict Mode
    strict: [2, "global"],

    // Variables
    "init-declarations": 0,
    "no-catch-shadow": 0,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-restricted-globals": 0,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-unused-vars": 2,
    "no-use-before-define": [2, {functions: false, classes: true}],

    // Node.js and CommonJS
    "callback-return": 2,
    "global-require": 2,
    "handle-callback-err": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "no-sync": 0,

    // Stylistic Issues
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {allowSingleLine: true}],
    camelcase: [2, {properties: "always"}],
    "comma-spacing": [2, {before: false, after: true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self"],
    "eol-last": [2, "unix"],
    "func-names": 2,
    "func-style": [2, "declaration", {allowArrowFunctions: true}],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    indent: [2, 2],
    "jsx-quotes": 0,
    "key-spacing": [2, {beforeColon: false, afterColon: true, mode: "strict"}],
    "keyword-spacing": [2, {before: true, after: true}],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": [2, {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
    }],
    "max-depth": 0,
    "max-len": [2, 80],
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": [2, {
      newIsCap: true,
      capIsNew: true,
      capIsNewExceptions: ["TypeError", "ReferenceError"],
    }],
    "new-parens": 2,
    "newline-after-var": [2, "always"],
    "newline-before-return": 2,
    "newline-per-chained-call": 0,
    "no-array-constructor": 0,
    "no-bitwise": 0,
    "no-continue": 0,
    "no-inline-comments": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {max: 1}],
    "no-negated-condition": 0,
    "no-nested-ternary": 0,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-restricted-syntax": 0,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "never"],
    "one-var": [2, {initialized: "never"}],
    "one-var-declaration-per-line": [2, "initializations"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "before"],
    "padded-blocks": [2, "never"],
    "quote-props": [2, "as-needed"],
    quotes: [2, "double"],
    "require-jsdoc": 0,
    semi: [2, "always", {omitLastInOneLineBlock: true}],
    "semi-spacing": [2, {before: false, after: true}],
    "sort-imports": [2, {
      ignoreCase: true,
      memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
    }],
    "sort-vars": [2, {ignoreCase: true}],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [2, {words: true, nonwords: false}],
    "spaced-comment": [2, "always"],
    "wrap-regex": 0,

    // ECMAScript 6
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, {before: true, after: true}],
    "constructor-super": 2,
    "generator-star-spacing": [2, {before: false, after: true}],
    "no-class-assign": 2,
    "no-confusing-arrow": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "object-shorthand": [2, "always"],
    "prefer-arrow-callback": 0,
    "prefer-const": 0,
    "prefer-reflect": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "template-curly-spacing": [2, "never"],
    "yield-star-spacing": [2, {before: true, after: false}],
  },
};
