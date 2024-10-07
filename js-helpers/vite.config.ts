import {defineConfig, UserConfig} from 'vite';
import dts from 'vite-plugin-dts';
import {resolve} from 'path';

const commonCfg: UserConfig = {
    plugins: [dts({include: ['src']})],
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'modules',
        emptyOutDir: true,
        outDir: 'dist',
        //minify: 'terser',

        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@krinopotam/js-helpers',
            fileName: (_format, entryName) => entryName.replace('src/', '') + '.js',
            formats: ['es'],
        },

        rollupOptions: {
            output: {
                preserveModules: true,
                //preserveModulesRoot: "",
            },
            //external:  (moduleName:string) => moduleName.includes('node_modules'),
            external: ['deep-object-diff', 'lodash.clonedeep', 'lodash.isequal', 'lodash.merge', 'nanoid', 'object-hash', 'uuid', 'deepmerge-ts'],
        },
    },
};

export default defineConfig(({command, mode}) => {
    console.log('----------------', command, mode);
    //if (mode === 'demo') return command === 'serve' ? devDemoCfg : buildDemoCfg
    return commonCfg;
});
