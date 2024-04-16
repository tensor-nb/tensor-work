// import type { SyncTransformer, TransformOptions, TransformedSource } from '@jest/transform'

class JsonTransformer {
    // {
    //     process(sourceText, sourcePath, options) {
    //       return {
    //         code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    //       };
    //     },
    // }
    // const code = `module.exports = ${JSON.stringify(path.basename(sourcePath))};`;
    // specified in the "transform" object of Jest configuration
    // must export a `process` or `processAsync` or `createTransformer` function.

    // define('LocalizationConfigs/localization_configs/RU.json', [], function() {
    //     return {
    //         "code": "RU",
    //         "DateTimeFormats": {
    //             "DIGITAL_MONTH_FULL_YEAR": "MM.YYYY",

    process(
        sourceText,
        sourcePath,
        options
    ) {

        throw new Error(sourceText);

        const code = `module.exports = {
            "code": "RU",
        };`;

        return {
            code: JSON.stringify(JSON.parse(sourceText)),
            map: null,
        }
    };
}


const transform = new JsonTransformer();

export {
    transform as default
}
