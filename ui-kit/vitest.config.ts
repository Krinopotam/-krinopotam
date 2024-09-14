import {defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config';
import path from 'path';

export default defineConfig(configEnv =>
    mergeConfig(
        viteConfig(configEnv),
        defineConfig({
            test: {
                globals: true,
                environment: 'jsdom',
                reporters: ['verbose'],
                include: ['./tests/**/*.test.{js,tsx,ts}'],
            },
        })
    )
);
