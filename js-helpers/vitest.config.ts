import {configDefaults, defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config';
import * as path from 'path';

export default defineConfig(configEnv =>
    mergeConfig(
        viteConfig(configEnv),
        defineConfig({
            test: {
                globals: true,
                reporters: ['verbose'],
                //include: ['src/'],
                //include: ['./src/**/*.test.{js,tsx,ts}'],
                exclude: [...configDefaults.exclude, './src/references/**'],
                alias: {
                    //'@src/': new URL('./src/', import.meta.url).pathname,
                    '@src': path.resolve(__dirname, './src'),
                },
            },
        })
    )
);
