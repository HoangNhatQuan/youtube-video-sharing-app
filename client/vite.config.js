import { defineConfig } from 'vite';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(function (configs) {
    return {
        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
        theme: {
            extend: {},
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };
});
