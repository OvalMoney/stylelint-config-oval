
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'declaration-no-important': true,
    'color-no-invalid-hex': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'property-no-unknown': null,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
    },
    ],
    'block-no-empty': true,
    'selector-pseudo-element-no-unknown': true,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ["mixin", "define-mixin"]
    }],
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'number-max-precision': 2,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['appearance'],
    }],
    'selector-class-pattern': '[A-Z][A-Za-z0-9_-]+',
    'selector-max-empty-lines': 0,
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'max-nesting-depth': 2,
    'font-weight-notation': null,
    'font-family-name-quotes': 'always-where-recommended',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-list-max-empty-lines': 0,
    'property-case': 'lower',
    'custom-property-empty-line-before': ['always', {
      except: ['after-custom-property', 'first-nested'],
    }],
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-newline-after': 'always',
    'selector-attribute-brackets-space-inside': null,
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
    }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-space-after': 'always',
    'at-rule-empty-line-before': ['always', {
      except: ['after-same-name'],
    }],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'max-empty-lines': [2, {
      ignore: ['comments'],
    }],
    'declaration-block-single-line-max-declarations': 0,
    'function-url-quotes': ['always', {
      except: ['empty'],
    }],
  },
};
