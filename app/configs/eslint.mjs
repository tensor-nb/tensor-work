import {
    base,
    getEslintTypescriptConfig
} from '../lint-configs/eslint/eslint.config.mjs';
import { es5 } from '../lint-configs/eslint/es5.config.mjs';


const getEslintConfig = ({ dir }) => {
    const typescript = getEslintTypescriptConfig({ dir});

    return [
        ...base,
        typescript,
        {
            files: [
                '*.config.js',
                `${ dir }/**/*.{js,ts,jsx,tsx}`,
            ],
        }, {
            files: [
                `${ dir }/**/*.ts`,
            ],
            languageOptions: {
                parserOptions: {
                    project: `${ dir }/tsconfig.json`,
                },
            },
            rules: {
                '@typescript-eslint/comma-dangle': [
                    'error',
                    'never',
                ],
            },
        }, {
            files: [
                `${ dir }/**/*.tsx`,
            ],
            languageOptions: {
                parserOptions: {
                    project: `${ dir }/tsconfig.json`,
                },
            },
        }, {
            files: [`${ dir }/**/*.js`],
            ignores: [`${ dir }/**/*.router.js`],
            ...es5,
        }, {
            ignores: [ '*.config.js' ],
            // rules: {
            //     'no-console': 2,
            //     'comma-dangle': [
            //         'error',
            //         'never',
            //     ],
            // },
        },
    ]
}


export {
    getEslintConfig
}
