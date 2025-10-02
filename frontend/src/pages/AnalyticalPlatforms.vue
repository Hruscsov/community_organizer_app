<script setup>
import { ref } from 'vue'

const platforms = ref([
  { name: 'Analytics A', purpose: 'Adatfeldolgozás' },
  { name: 'Analytics B', purpose: 'Modellezés' }
])
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Analitikai platformok</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="platform in platforms" :key="platform.name"
           class="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ platform.name }}</h2>
        <p class="text-gray-600">{{ platform.purpose }}</p>
      </div>
    </div>
  </div>
</template>
