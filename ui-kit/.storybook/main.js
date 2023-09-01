/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    //stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    //stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
    stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    core: {
        disableTelemetry: true, // Disables telemetry
    },
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },

    exclude: [/node_modules/, '/src/**/*/*.test.ts', '/src/**/*/*.test.tsx'],
};

export default config;
