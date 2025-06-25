<script setup>
const props = defineProps(['label', 'placeholder']);
import { getTheme } from '../utils/ThemeHelper';

const inputDefaultClass = [
    'w-full',
    'px-3',
    'py-2',
    'border',
    'border-gray-300',
    'rounded-md',
    'shadow-sm',
    'placeholder-gray-400',
    'focus:outline-none',
    'focus:ring-2',
];

const themes = {
    theme1: [
        'focus:ring-cyan-500',
        'focus:border-cyan-500',
    ],
    theme2: [
        'focus:ring-gray-500',
        'focus:border-gray-500',
    ],
    theme3: [
        'focus:ring-red-500',
        'focus:border-red-500',
    ],
};

const theme = getTheme(themes, inputDefaultClass);
</script>

<template>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        {{ label || 'Lorem' }}
    </label>
    <input 
        type="email" 
        id="email"
        :class="theme"
        :placeholder="placeholder || 'Lorem ipsum'"
    />
</template>

<style scoped></style>