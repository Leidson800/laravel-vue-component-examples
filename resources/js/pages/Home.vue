<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-2">Hello World</h1>
      <p class="text-gray-600 mb-6">
        Vue Router e Vite configurados com sucesso no Laravel!
      </p>
      <div class="flex flex-col gap-3">
        <span class="inline-block bg-emerald-50 text-emerald-700 text-sm font-medium px-3 py-1.5 rounded-full border border-emerald-200">
          Rota: {{ $route.path }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
