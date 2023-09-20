import type { StorybookConfig } from '@storybook/react-vite';
const config:StorybookConfig = {
    //stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    //stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    core: {
        disableTelemetry: true, // Disables telemetry
    },
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-console",
        "@storybook/addon-storysource",
        "@storybook/addon-toolbars",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    async viteFinal(config, options) {

        /*
        // Add your vite configuration here
        config.build= {
            target: 'modules',
            sourcemap: true,
        }
        console.log('---------------------------------', config)
        */

        return config;
    },
    //exclude: [/node_modules/, '/src/**/*/*.test.ts', '/src/**/*/*.test.tsx'],
};

export default config;
