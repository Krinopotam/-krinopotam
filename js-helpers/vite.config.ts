import {defineConfig, UserConfig} from 'vite'
import * as path from "path";

const commonCfg: UserConfig = {
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

export default defineConfig(() => {
    return commonCfg
})