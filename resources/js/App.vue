<script setup lang="ts">
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

onMounted(() => {
    console.log('Hello from Vue 3 + Typescript + Vite + Laravel')
})
</script>

<template>
    <main class="p-6 text-center">
        <h1 class="text-2xl font-bold text-[#1b1b18] dark:text-white">
            Hello from Vue 3 + Typescript + Vite + Laravel
        </h1>

        <HelloWorld
            msg="Team!"
            :count="1"
        />
    </main>
</template>
