import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

const devExamplesCfg: UserConfig = {
    plugins: [react()],
    build: {
		target:'modules',
        minify: 'terser',
    },
    server: {
        open: 'index.html',
    }
}

const buildCfg: UserConfig = {
    plugins: [react()],
    build: {
        target: 'modules',
        minify: 'terser',
        outDir: 'build',
    },
}

// noinspection JSUnusedGlobalSymbols
export default defineConfig(({command, mode}) => {
    if (command === 'serve') {
        if (mode === 'examples') return devExamplesCfg
    }
    else return buildCfg
})