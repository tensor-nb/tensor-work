import type { SyncTransformer, TransformOptions, TransformedSource } from '@jest/transform'


class JsonTransformer implements SyncTransformer {
    process(
        sourceText: string,
        sourcePath: string,
        options: TransformOptions<unknown>
    ): TransformedSource {
        return {
            code: JSON.stringify(JSON.parse(sourceText)),
            map: null,
        }
    };
}

export {
    JsonTransformer as transform
}
