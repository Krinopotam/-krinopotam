import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
    //stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    //stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
    stories: ['../stories/**/*.mdx', '../stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
    core: {
        disableTelemetry: true, // Disables telemetry
    },
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-console',
        '@storybook/addon-storysource',
        '@storybook/addon-toolbars',
        '@storybook/addon-mdx-gfm',
        '@chromatic-com/storybook'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {},
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            // By default, react-doc-gen-typescript filters node_modules type, this includes any types excepts base types
            propFilter: prop => {
                if (!prop.parent?.name) return true;
                if (['value', 'onChange'].includes(prop.name)) return true;

                if (
                    [
                        'AriaAttributes',
                        'AnchorHTMLAttributes',
                        'Attributes',
                        'ButtonHTMLAttributes',
                        'ClassAttributes',
                        'DOMAttributes',
                        'HTMLAttributes',
                        'InputHTMLAttributes',
                    ].includes(prop.parent.name)
                ) {
                    return false;
                }

                if (/node_modules\/typescript/.test(prop.parent.fileName)) {
                    return false;
                }

                //if (/node_modules/.test(prop.parent.fileName)) {
                //  console.log('__TEST__', prop.parent.name);
                //  console.log('__TEST__2__', prop);
                //}

                return true;
            },

            // The following 2 options turns string types into string literals and allows
            shouldExtractLiteralValuesFromEnum: true,
            savePropValueAsString: true,
            shouldRemoveUndefinedFromOptional: true,
        },
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

        //config.base = '/-krinopotam/storybook';
        //console.log('------------',config,options)
        //config.build.outDir = 'deploy/ui-kit/storybook';
        return config;
    },
    //exclude: [/node_modules/, '/src/**/*/*.test.ts', '/src/**/*/*.test.tsx'],
};

export default config;
