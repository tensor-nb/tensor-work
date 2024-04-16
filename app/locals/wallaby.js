const conf = function setup(wallaby) {

    const root = './client';

    console.log(wallaby.projectCacheDir);

    return {
        autoDetect: ['jest'],

        files: [
            // { pattern: `C:/Saby/builds/online/build-ui/resources/*` },
            { pattern: `${ root }/**/*.ts` },
            { pattern: `${ root }/**/*.test.ts`, ignore: true },
        ],

        tests: [
            `${ root }/**/*.test.ts`,
        ],
    };
};


export {
    conf as default,
};
