import {defineConfig, UserConfig} from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import {watch} from 'vite-plugin-watch';
import {nodeExternals} from 'rollup-plugin-node-externals';
import {libInjectCss} from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import {glob} from 'glob';

const commonCfg: UserConfig = {
    plugins: [react()],
    resolve: {alias: {'@src': path.resolve(__dirname, './src')}},
    css: {preprocessorOptions: {scss: {api: 'modern'}}},
    build: {
        target: 'modules',
        emptyOutDir: true,
        //minify: 'terser',
    },
};

/** Demo development config */
const devDemoCfg: UserConfig = {
    plugins: [
        react(),
        watch({
            pattern: ['demo/components/**/*.*'],
            command: 'node ./demo/_generator/build/generateDemo.js',
        }),
    ],
    resolve: {alias: {'@src': path.resolve(__dirname, './src')}},
    css: {preprocessorOptions: {scss: {api: 'modern'}}},
    server: {open: 'index.html'},
};

/** Demo building config */
const buildDemoCfg: UserConfig = {
    plugins: [react()],
    resolve: {alias: {'@src': path.resolve(__dirname, './src')}},
    css: {preprocessorOptions: {scss: {api: 'modern'}}},
    base: '/-krinopotam/ui-kit/demo', //base URL (gitHub pages use https://krinopotam.github.io/-krinopotam/ui-kit, so URL is https://krinopotam.github.io and baseURL is /-krinopotam/ui-kit)
    build: {
        target: 'modules',
        emptyOutDir: true,
        outDir: 'deploy/ui-kit/demo',
        minify: 'terser',
        terserOptions: {
            keep_classnames: true, //"We preserve class names so that in FormConstructor, the names of the displayed classes do not change after code minification
        },
    },
};

/** uI-kit lib building config */
const components = glob.sync('src/*/index.ts'); // get all indexes list
const include = glob.sync('src/**/*.{ts,tsx,css,scss}', {ignore: ['lib/**/*.d.ts']}).map((file: string) => [
    path.relative('src', file.slice(0, file.length - path.extname(file).length)), // remove `src/` and the file extension from each
    path.resolve(__dirname, file), //to absolute path
]);

const buildLibCfg: UserConfig = {
    plugins: [
        react(),
        nodeExternals({
            include: ['@ant-design/colors', '@ant-design/icons', '@ant-design/icons-swg', 'classnames', 'dayjs'],
        }),
        libInjectCss(),
        dts({include: ['src']}),
    ],
    resolve: {alias: {'@src': path.resolve(__dirname, './src')}},
    css: {preprocessorOptions: {scss: {api: 'modern'}}},
    build: {
        target: 'modules',
        emptyOutDir: true,
        outDir: 'dist',
        sourcemap: true,
        lib: {
            entry: components,
            name: '@krinopotam//ui-kit',
            fileName: (_format, entryName) => entryName + '.js',
            formats: ['es'],
        },

        rollupOptions: {
            input: Object.fromEntries(include),
            external: [
                'rc-tree-select/es/TreeSelectContext', //we use TreeSelectContext in TreeSelect DropdownRender and if it is not specified separately in externals, then vite cuts its import
            ],
        },
    },
};

export default defineConfig(({command, mode}) => {
    console.log('----------------', command, mode);
    if (mode === 'demo') return command === 'serve' ? devDemoCfg : buildDemoCfg;
    if (mode === 'build-lib') return buildLibCfg;
    return commonCfg;
});
