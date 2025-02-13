import esLint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

import globals from 'globals';

import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//

export default tsEslint.config(
    {
        ignores: ['**/build/**', '**/dist/**', 'node_modules', 'eslint.config.js', 'eslint.config.mjs'],
    },
    esLint.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        plugins: {
            '@typescript-eslint': tsEslint.plugin,
            'react': eslintReact,
            'react-hooks': hooksPlugin,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parser: tsEslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                //projectService: true,
                project: ['./tsconfig.json', './tsconfig.eslint.json', './tsconfig.test.json'],
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
            '@typescript-eslint/no-unused-vars': ['error', {ignoreRestSiblings: true}], //no error for rest parameters
            'react-hooks/exhaustive-deps': ['warn', {additionalHooks: '(useUpdateEffect)'}],
        },
    },
    {
        // disable type-aware linting on JS files
        files: ['**!/!*.js'],
        ...tsEslint.configs.disableTypeChecked,
    },
    eslintConfigPrettier
);
