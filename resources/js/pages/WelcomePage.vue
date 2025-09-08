<script setup lang="ts">
import { login, register } from '@/routes'
import { Head, Link } from '@inertiajs/vue3'
</script>

<template>
    <Head title="Welcome">
        <link
            rel="preconnect"
            href="https://rsms.me/"
        />
        <link
            rel="stylesheet"
            href="https://rsms.me/inter/inter.css"
        />
    </Head>
    <div
        class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a]"
    >
        <header class="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
            <nav class="flex items-center justify-end gap-4">
                <Link
                    :href="login()"
                    class="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                    Login
                </Link>
                <Link
                    :href="register()"
                    class="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                    Register
                </Link>
            </nav>
        </header>
        <div class="flex w-full flex-col items-center justify-center">
            <h2 class="font-sans text-3xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">
                This is the body of the app!
            </h2>
        </div>
    </div>
</template>
