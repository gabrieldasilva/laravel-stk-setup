<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
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
    <div class="flex min-h-screen flex-col items-center p-5">
        <div class="flex w-full flex-col items-center justify-center">
            <h2 class="font-sans text-3xl font-bold">This is the body of the app!</h2>
        </div>
    </div>
</template>
