
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'max-empty-lines': 2,
    'no-missing-end-of-source-newline': true,
    'no-descending-specificity': null,
    'selector-type-no-unknown': null,
    'at-rule-empty-line-before': null,
    'rule-empty-line-before': null,
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'property-no-vendor-prefix': true,
    'max-nesting-depth': 3,
    'property-no-unknown': [true, {
      ignoreProperties: ['contain', 'appearance', 'font-range', 'line-height-range'],
    }],
  },
};
