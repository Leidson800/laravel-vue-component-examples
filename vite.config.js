import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@resources': path.resolve(__dirname, 'resources'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5174,
        strictPort: true,
        origin: 'http://localhost:5174',
        cors: true,
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
        },
    },
});
