import {defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

const devExamplesCfg: UserConfig = {
    plugins: [react()],
    build: {
		target:'modules',
        //minify: 'terser',
    },
    server: {
        open: 'index.html',
    }
}

// noinspection JSUnusedGlobalSymbols
export default defineConfig(({command, mode}) => {
    if (command === 'serve') {
        if (mode === 'examples') return devExamplesCfg
    }

    return {
        plugins: [react()],
    }
})