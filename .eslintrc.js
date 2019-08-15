const IS_PROD = process.env.NODE_ENV === 'production';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier', 'plugin:import/recommended'],
  plugins: ['prettier', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: [ERROR, 'always'],
    'no-extra-semi': ERROR,
    'prefer-template': WARN,
    'no-cond-assign': OFF,
    /** Allow to use new for side effects */
    'no-new': OFF,
    /** Disallow 'console.log' on production */
    'no-console': IS_PROD ? [WARN, { allow: ['info', 'warn', 'error'] }] : OFF,
    /** Allow implicit return */
    'consistent-return': OFF,
    /** Allow ++ -- operators */
    'no-plusplus': OFF,
    /** Allow to reassign method parameters */
    'no-param-reassign': OFF,
    /** Allow nested ? ternary : expressions ? ... : ...  */
    'no-nested-ternary': OFF,
    /** Allow __variables__ with underscores */
    'no-underscore-dangle': OFF,
    /** Allow both LF and CRLF line endings */
    'linebreak-style': OFF,
    /** Allow not-camelcase properties */
    camelcase: [ERROR, { properties: 'never', ignoreDestructuring: true }],

    // ! eslint-plugin-import rules
    /** Enforce file extensions on 'import' statements */
    'import/extensions': [ERROR, 'always', { ignorePackages: true }],
    /** Allow to import peer dependencies */
    'import/no-extraneous-dependencies': [WARN, { peerDependencies: true }],
    /** No one prefers the default export... */
    'import/prefer-default-export': OFF,

    // ! eslint-config-prettier override
    /** Require semicolons without enforcing */
    semi: [WARN, 'always'],
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
};
