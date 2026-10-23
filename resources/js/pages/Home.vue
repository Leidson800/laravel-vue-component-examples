<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div>
      <div class="grid grid-cols-6">
          <div class="col-span-6 bg-amber-500">
            <h1 class="py-4 text-xl px-4">Header</h1>
      </div>
      </div>
      <div class="grid grid-cols-6">
          <div class="col-span-1 bg-amber-200">
              <ul class="list-none px-4 py-2">
                  <li>Home</li>
                  <li>Productos</li>
                  <li>Oferta</li>
              </ul>
          </div>
          <div class="col-span-5 bg-amber-100">
          </div>
      </div>
  </div>
</template>


