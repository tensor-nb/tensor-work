import { getEslintConfig } from '../../../app/configs/eslint.mjs';


const config = getEslintConfig({
    dir: 'client'
});


export {
    config as default
}
