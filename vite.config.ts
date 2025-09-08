import { wayfinder } from '@laravel/vite-plugin-wayfinder'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        wayfinder(),
        vue(),
        laravel({
            input: [
                //'resources/css/app.css',
                'resources/js/app.ts'
            ],
            refresh: true
        }),
        tailwindcss()
    ]
})
