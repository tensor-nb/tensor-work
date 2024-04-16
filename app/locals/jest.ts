import {
    // pathsToModuleNameMapper,

    type JestConfigWithTsJest,
} from 'ts-jest';

// import { compilerOptions } from './client/tsconfig.json';

const dummy = '<rootDir>/../../../node_modules/identity-obj-proxy';

const config: JestConfigWithTsJest = {
    // rootDir: './',
    roots: ['<rootDir>/client'],

    preset: 'ts-jest',
    // preset: 'ts-jest/presets/default-esm',
    // preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',

    // modulePaths: [compilerOptions.baseUrl],
    // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),

    // modulePaths: ['<rootDir>'],
    moduleDirectories: [
        // custom-ui / eo /sources / root
        '<rootDir>/../../../node_modules',

        '<rootDir>/../../../sources/eo/custom-ui/client',
        '<rootDir>/../../../sources/eo/custom-ui/core',
        '<rootDir>/../../../sources/eo/custom-ui/registry',

        '<rootDir>/../../../sources/notice/engine/client',

        '<rootDir>/../../../sources/saby/i18n',
        '<rootDir>/../../../sources/saby/types',
        '<rootDir>/../../../sources/saby/ui',
        '<rootDir>/../../../sources/saby/wasaby-app/src',
        '<rootDir>/../../../sources/saby/wasaby-controls',
        '<rootDir>/../../../sources/saby/wasaby-requirejs-loader',
        '<rootDir>/../../../sources/sbis/core',
        '<rootDir>/../../../sources/sbis/engine/client',
        '<rootDir>/../../../sources/sbis/rmi/src/client',
        '<rootDir>/../../../sources/sbis/ws',

        // '<rootDir>/../../../builds/online/build-ui/resources',
    ],

    moduleNameMapper: {
        '^i18n!.+': '<rootDir>/../../../app/mocks/i18n.ts',
        '^css!.+': dummy,
        '^wml!.+': dummy,
        '^optional!.+': dummy,
        '^text$': dummy,
        '^native-css$': dummy,
        // './Loader': dummy,
        // '^LocalizationConfigs/.+json$': dummy,
        // '^UI/Base$': dummy,

        '^Core/(.+)$': '<rootDir>/../../../sources/sbis/ws/WS.Core/core/$1',
        '^Lib/(.+)$': '<rootDir>/../../../sources/sbis/ws/WS.Core/lib/$1',
        '^UICore/(.+)$': '<rootDir>/../../../sources/saby/ui/UIReact/UICore/$1',
    },

    transform: {
        // '^LocalizationConfigs.+json$': '<rootDir>/../../../app/transformers/json.mjs',
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/client/tsconfig.json',
                isolatedModules: true,
                // module: 'amd',
            },
        ],
    },

    setupFiles: ['<rootDir>/../../../app/configs/jest.setup.ts'],
};


export default config;
