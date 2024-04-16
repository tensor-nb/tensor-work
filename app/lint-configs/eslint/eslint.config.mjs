import js from '@eslint/js';

import { base } from './base.config.mjs'
import { getEslintTypescriptConfig } from './typescript.config.mjs'
import { es5 } from './es5.config.mjs'


const basic = [
    js.configs.recommended,
    base,
];


export {
    basic as base ,
    getEslintTypescriptConfig,
    es5,
};
