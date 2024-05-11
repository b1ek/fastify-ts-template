// @ts-check

import tse from 'typescript-eslint';

export default tse.config(...tse.configs.recommended, {
    rules: {
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '_',
                args: 'after-used',
                caughtErrors: 'none',
            },
        ],
        'no-invalid-regexp': 'error',
        'no-var': 'error',
        eqeqeq: 'error',
        'no-useless-concat': 'error',
        'no-useless-rename': 'error',
        'no-useless-assignment': 'error',
        'default-case': 'error',
        'prefer-const': 'error',
    },
});
