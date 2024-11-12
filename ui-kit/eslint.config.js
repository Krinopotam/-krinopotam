import esLint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
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
            'react': eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
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
            ...eslintPluginReactHooks.configs.recommended.rules,
            ...eslintPluginReact.configs.recommended.rules,
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
