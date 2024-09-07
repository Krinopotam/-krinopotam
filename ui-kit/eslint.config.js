// @ts-check

import esLint from '@eslint/js';
import tsEsLint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
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
            '@typescript-eslint': tsEsLint.plugin,
            react: eslintReact,
            'react-hooks': hooksPlugin,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.jest,
            },
            parser: tsEsLint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                //projectService: true,
                project: [
                    './tsconfig.json',
                    './tsconfig.eslint.json',
                ],
                //tsconfigRootDir: import.meta.dirname,
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            ...hooksPlugin.configs.recommended.rules,
            ...eslintReact.configs.recommended.rules,
        },
    },
    {
        // disable type-aware linting on JS files
        files: ['**!/!*.js'],
        ...tsEsLint.configs.disableTypeChecked,
    },
    eslintConfigPrettier
);
