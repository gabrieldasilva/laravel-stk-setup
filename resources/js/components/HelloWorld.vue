<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
    msg: string,
    count?: number
}>()

const emit = defineEmits<{
    (e: 'update:count', value: number): void
}>()

let count = ref(props.count ?? 0)

function increment() {
    count.value++
    emit('update:count', count.value)
}
</script>

<template>
    <section class="mt-4">
        <p class="mb-2 text-[#1b1b18] dark:text-white text-center">
            Welcome, {{ props.msg }}
        </p>
        <button
            class="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            @click="increment"
        >
            Clicked {{ count }} times.
        </button>
    </section>
</template>
