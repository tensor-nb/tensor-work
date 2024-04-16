
const jsdoc = {
    'jsdoc/check-alignment': [
        'error',
    ],
    'jsdoc/check-access': [
        'error',
    ],
    'jsdoc/check-param-names': [
        'error',
    ],
    'jsdoc/check-property-names': [
        'error',
    ],
    'jsdoc/check-tag-names': [
        'warn',
    ],
    'jsdoc/require-jsdoc': [
        'warn',
        {
            publicOnly: false,
            require: {
                ClassDeclaration: true,
                ClassExpression: true,
                FunctionDeclaration: true,
                FunctionExpression: true,
                MethodDefinition: true,
            },
            checkConstructors: false,
        },
    ],
    'jsdoc/no-types': [
        'error',
    ],
};

export {
    jsdoc,
};
