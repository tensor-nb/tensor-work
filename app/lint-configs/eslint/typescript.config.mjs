import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';


const rules = {
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': [
        1,
        {
            arrays: 'always-multiline',
            enums: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
            generics: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
            tuples: 'always-multiline',
        },
    ],

    // 'no-unused-vars': 0,
    // '@typescript-eslint/no-unused-vars': 2,

    // indent: 0,
    // '@typescript-eslint/indent': [
    //     'error',
    //     4,
    // ],

    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/naming-convention': [
        'error', {
        //     selector: 'import',
        //     format: ['camelCase', 'PascalCase'],
        // }, {
        //     selector: 'variableLike',
        //     format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE' ],
        //     // leadingUnderscore: 'allow',
        // }, {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            modifiers: ['const'],
            types: ['function'],
            format: ['strictCamelCase', 'StrictPascalCase'],
            // leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            modifiers: ['exported'],
            types: ['function'],
            format: ['strictCamelCase', 'StrictPascalCase'],
            // leadingUnderscore: 'allow',
        }, {
            selector: 'variable',
            modifiers: ['const'],
            types: ['array', 'boolean', 'number', 'string'],
            format: ['strictCamelCase', 'UPPER_CASE'],
            // leadingUnderscore: 'allow',
        // }, {
        //     selector: 'variable',
        //     types: ['array', 'number', 'string'],
        //     format: null,
        //     custom: {
        //         regex: '^(?!is|should|has|can|did|will)[a-z]+[A-Z]',
        //         match: true,
        //     }
        }, {
            selector: 'function',
            format: ['strictCamelCase', 'StrictPascalCase'],
        }, {
            selector: 'typeLike',
            format: ['StrictPascalCase'],
        }, {
            selector: 'memberLike',
            format: ['strictCamelCase']
        }, {
            selector: 'enum',
            format: ['StrictPascalCase', 'UPPER_CASE'],
        }, {
            selector: 'enumMember',
            format: ['StrictPascalCase', 'UPPER_CASE'],
        }, {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['strictCamelCase'],
            leadingUnderscore: 'require'
        }, {
            selector: 'memberLike',
            modifiers: ['protected'],
            format: ['strictCamelCase'],
            leadingUnderscore: 'require'
        }, {
            selector: 'objectLiteralProperty',
            format: ['strictCamelCase', 'UPPER_CASE']
        }, {
            selector: 'typeAlias',
            format: ['StrictPascalCase'],
            prefix: ['I', 'T'],
            filter: {
                regex: "^[IT][A-Z]",
                match: true,
            }
        }, {
            selector: 'interface',
            format: ['StrictPascalCase'],
            prefix: ['I'],
        }
        // {
        //     selector: 'default',
        //     format: ['camelCase'],
        //     leadingUnderscore: 'allow',
        // }
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            accessibility: 'no-public',
            overrides: {
                properties: 'no-public',
                accessors: 'no-public',
                constructors: 'no-public',
                methods: 'no-public',
                parameterProperties: 'no-public',
            },
        },
    ],
    '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            singleline: {
                requireLast: true,
            },
        },
    ],
    // '@typescript-eslint/semi': [ 'error' ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-assignment': [
        'off',
    ],
    '@typescript-eslint/no-unsafe-call': [
        'off',
    ],
    '@typescript-eslint/no-unsafe-member-access': [
        'off',
    ],
    '@typescript-eslint/no-unsafe-return': [
        'off',
    ],
    '@typescript-eslint/type-annotation-spacing': [
        'error',
    ],
    '@typescript-eslint/typedef': [
        'error',
        {
            parameter: true,
            arrowParameter: false,
            memberVariableDeclaration: true,
        },
    ],
    '@typescript-eslint/no-empty-function': [
        'off',
    ],
    '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
            allowExpressions: true,
            allowTypedFunctionExpressions: false,
        },
    ],
    '@typescript-eslint/array-type': [
        'error',
        {
            'default': 'array',
        },
    ],
    '@typescript-eslint/no-inferrable-types': [
        'off',
        {
            ignoreParameters: true,
        },
    ],
};

const getEslintTypescriptConfig = ({ dir = '' }) => {
    return {
        files: [
            `${ dir }/**/*.ts`,
            `${ dir }/**/*.tsx`,
        ],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: `${ dir }/tsconfig.json`,
                ecmaVersion: 2021,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules
    }
}


export {
    getEslintTypescriptConfig,
};
