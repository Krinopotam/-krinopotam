module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    },
    rules: {
        'import/no-cycle': [
            'error',
            {
                maxDepth: 10,
                ignoreExternal: true,
            },
        ],
    },
};