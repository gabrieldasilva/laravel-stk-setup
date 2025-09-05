import js from '@eslint/js'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default defineConfigWithVueTs([
    vue.configs['flat/recommended'],
    vueTsConfigs.recommended,
    // Base Js rules (for any plain JS files)
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        ...js.configs.recommended
    },
    {
        ignores: [
            'vendor',
            'node_modules',
            'public',
            'bootstrap/ssr',
            'tailwind.config.js',
            'resources/js/components/ui/*'
        ]
    },
    // Project rules
    {
        name: 'project/overrides',
        rules: {
            // TypeScript overrides
            // Vue overrides
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always'
                    }
                }
            ],
            // General overrides
            'no-console': process.env.node === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.node === 'production' ? 'warn' : 'off'
        }
    },
    // Prettier overrides
    prettier
])
