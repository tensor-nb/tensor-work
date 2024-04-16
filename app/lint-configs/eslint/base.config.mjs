import globals from 'globals';

import jest from 'eslint-plugin-jest';
import stylistic from '@stylistic/eslint-plugin'


const base = {
    plugins: {
        jest,
        '@stylistic': stylistic,
    },
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        }
    },
    rules: {
        ...jest.configs.recommended.rules,

        'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        'one-var': [ 'error', 'never' ],
        'operator-assignment': [ 'warn', 'always' ],
        'max-depth': [ 'warn', 4 ],
        'max-lines': [ 'warn', { max: 1000, skipComments: true } ],
        // 'max-lines-per-function': [ 'warn', { max: 50, skipComments: true } ],
        'max-nested-callbacks': [ 'warn', 3 ],
        'max-params': [ 'error', 3 ],
        'complexity': [ 'warn', { max: 10 } ],
        'no-else-return': [ 'error', { allowElseIf: false } ],
        'no-magic-numbers': [
            'warn',
            {
              'detectObjects': false,
              'enforceConst': true,
              'ignore': [-1, 0, 1, 2, 10, 100],
              'ignoreArrayIndexes': true
            }
        ],
        'arrow-parens': 2,
        'prefer-const': 'error',

        '@stylistic/indent': ['error', 4, {
            SwitchCase: 1,
            flatTernaryExpressions: false,
            offsetTernaryExpressions: false,
        }],
        '@stylistic/semi': ['error', 'always' ],
        '@stylistic/operator-linebreak': ['error', 'after', {
            overrides: { '?': 'before', ':': 'before' }
        }],

        '@stylistic/multiline-ternary': ['error', 'always-multiline'],

        // Затратная операция
        'no-unused-vars': 0,

        'no-multi-spaces': 2,
        'key-spacing': 2,
        'no-trailing-spaces': 'error',
        'space-infix-ops': 'error',

        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 100,
            },
        ],
        'id-denylist': [
            'error',
            'boolean',
            'number',
            'string',
            'undefined',
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'object-curly-spacing': [
            'warn',
            'always',
        ],
        'func-call-spacing': [
            'error',
            'never',
        ],
        'semi-spacing': 'error',
        'keyword-spacing': 'error',
        'comma-spacing': 'error',
        'comma-dangle': [ 1,
            {
                arrays: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
                imports: 'always-multiline',
                objects: 'always-multiline',
            },
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                avoidQuotes: true,
            },
        ],
        'no-shadow': 'warn',
        'no-invalid-this': 'error',
        'no-this-before-super': 'error',
        'class-methods-use-this': 'warn',
        'prefer-arrow-callback': 'error',
        'prefer-object-spread': 'error',
        'no-await-in-loop': 'error',
        'no-return-await': 'error',
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
                next: [
                    'const',
                    'let',
                    'var',
                ],
            },
        ],
        quotes: [
            'error',
            'single',
        ],
        'quote-props': [
            'error',
            'as-needed',
            {
                keywords: true,
            },
        ],
        'no-useless-concat': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        eqeqeq: [
            'error',
            'smart',
        ],
        'no-undefined': 'error',
        'no-unused-expressions': 'error',
        'no-mixed-operators': 'error',
        'block-scoped-var': 'error',
        'getter-return': [
            'error',
        ],
        'no-setter-return': [
            'error',
        ],
        'no-return-assign': 'error',
        radix: 'error',
        'no-throw-literal': 'error',
        'spaced-comment': 'warn',

        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};


export {
    base,
}
