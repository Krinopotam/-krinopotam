import {defineConfig, UserConfig} from 'vite'
import * as path from "path";
import react from '@vitejs/plugin-react-swc'
import {watch} from "vite-plugin-watch"

const commonCfg: UserConfig = {
    plugins: [react()],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        target: 'modules',
        emptyOutDir:true,
        //minify: 'terser',
    },
}

const devDemoCfg: UserConfig = {
    ...commonCfg,
    plugins: [
        ...commonCfg.plugins,
        watch({
            pattern: ['demo/components/**/*.*'],
            command: "node ./demo/.generator/generateDemo.js",
        }),
    ],
    server: {
        open: 'index.html',
    }
}

const buildDemoCfg: UserConfig = {
    ...commonCfg,
    plugins: [
        ...commonCfg.plugins,
        watch({
            pattern: ['demo/components/**/*.*'],
            command: "node ./demo/generateDemo.js",
        }),
    ],
    build: {
        ...commonCfg.build,
        outDir:'demo-dist',
    }
}

// noinspection JSUnusedGlobalSymbols
export default defineConfig(({command, mode}) => {
    console.log('----------------',command, mode)
    if (mode === 'demo') return command === 'serve' ? devDemoCfg : buildDemoCfg
    return commonCfg
})