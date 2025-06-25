<script setup>
import { getTheme } from '../utils/ThemeHelper';
const props = defineProps(['label']);

let btnMainClasses = [
    'w-full',
    'flex',
    'justify-center',
    'py-2',
    'px-4',
    'border',
    'border-transparent',
    'rounded-md',
    'shadow-sm',
    'text-sm',
    'font-medium',
    'text-white',
    'bg-cyan-600',
    'hover:bg-cyan-700',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-cyan-500',
    'transition',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'transition duration-200'
];

const themes = {
    theme1: [
            'text-white',
            'bg-cyan-600',
            'hover:bg-cyan-700',
            'focus:ring-cyan-500',
        ],
    theme2: [
            'text-white',
            'bg-gray-600',
            'hover:bg-gray-700',
            'focus:ring-gray-500',
        ],
    theme3: [
            'text-white',
            'bg-red-600',
            'hover:bg-red-700',
            'focus:ring-red-500',
        ],
};

let currentTheme = getTheme(themes, btnMainClasses)

</script>

<template>
    <button type="submit"
        :class="currentTheme">
        {{ label || 'Entrar' }}
    </button>
</template>

<style>
</style>