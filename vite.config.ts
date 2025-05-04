// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            exportAsDefault: false, // ✅ включаем поддержку ReactComponent
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // поддержка '@/'
        },
    },
    server: {
        host: true,
        port: 3000,
        open: true,
        allowedHosts: ['vova.ayarayarovich.ru'], // ✅ разрешённый хост
    },
});
