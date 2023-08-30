import {defineConfig, UserConfig} from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react-swc'

const devExamplesCfg: UserConfig = {
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                examples: resolve(__dirname, 'src/examples/index.html'),
            },
        },
    },
    server: {
        open: '/src/examples/index.html',
    }
}

const buildExamplesCfg: UserConfig = {
    plugins: [react()],
    build: {
        target: 'modules',
        minify: 'terser',
        outDir: 'examples',
        rollupOptions: {
            input: {
                examples: resolve(__dirname, 'src/examples/index.html'),
            },
        },
    },
}

// noinspection JSUnusedGlobalSymbols
export default defineConfig(({command, mode}) => {
    console.log(command, mode)
    if (mode === 'examples') {
        return command === 'serve' ? devExamplesCfg : buildExamplesCfg
    }


    console.log(`No config for command: "${command}" and mode: "${mode}"`)
    return {}
})