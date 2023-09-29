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
        //minify: 'terser',
    },
}

const devExamplesCfg: UserConfig = {
    ...commonCfg,
    plugins: [
        react(),
        watch({
            pattern: ['demo/components/**/*.*'],
            command: "node ./demo/generateDemo.js",
        }),
    ],
    server: {
        open: 'index.html',
    }
}

// noinspection JSUnusedGlobalSymbols
export default defineConfig(({command, mode}) => {
    if (command === 'serve') {
        if (mode === 'demo') return devExamplesCfg
    }

    return commonCfg
})