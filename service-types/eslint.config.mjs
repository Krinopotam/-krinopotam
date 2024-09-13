// @ts-check

import esLint from '@eslint/js';
import tsEsLint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

import globals from 'globals';

import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//

export default tsEsLint.config(
    {
        ignores: ['**/build/**', '**/dist/**', 'node_modules', 'eslint.config.js', 'eslint.config.mjs'],
    },
    esLint.configs.recommended,
    ...tsEsLint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tsEsLint.plugin
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node
            },
            parser: tsEsLint.parser,
            parserOptions: {
                project: [
                    './tsconfig.json',
                    './tsconfig.test.json',
                    './tsconfig.eslint.json',
                ],
                //tsconfigRootDir: import.meta.dirname,
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    {
        // disable type-aware linting on JS files
        files: ['**!/!*.js'],
        ...tsEsLint.configs.disableTypeChecked,
    },
    eslintConfigPrettier
);
