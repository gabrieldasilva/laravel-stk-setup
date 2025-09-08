/*
 * Global types and env variables definitions.
 *
 * */
import { AppPageProps } from '@/types/index'
import type {
    PageProps as InertiaPageProps,
    Page,
    Router,
    createHeadManager
} from '@inertiajs/core'

declare module 'vite/client' {
    interface ImportMetaEnv {
        readonly VITE_APP_URL: string
        [key: string]: string | boolean | undefined
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv
        readonly glob: <T>(pattern: string) => Record<string, () => Promise<T>>
    }
}

declare module '@inertiajs/core' {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $inertia: typeof Router
        $page: Page
        $headManager: ReturnType<typeof createHeadManager>
    }
}

export {}
