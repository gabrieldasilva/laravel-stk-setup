<script setup lang="ts">
import type { HelloProps } from '@/types'
import { ref } from 'vue'

const props = defineProps<HelloProps>()

const emit = defineEmits<{
    (e: 'update:count', value: number): void
}>()

const count = ref(props.count ?? 0)

function increment() {
    count.value++
    emit('update:count', count.value)
}
</script>

<template>
    <section class="mt-4">
        <p class="mb-2 text-center text-[#1b1b18] dark:text-white">
            Welcome,
            {{ props.msg }}
        </p>
        <button
            class="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            @click="increment"
        >
            Clicked {{ count }} times.
        </button>
    </section>
</template>
