<script setup>
import { ref } from 'vue'

const databases = ref([
  { name: 'Database 1', type: 'Nyilvános' },
  { name: 'Database 2', type: 'Zárt' }
])
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Adatbázisok</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="db in databases" :key="db.name"
           class="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ db.name }}</h2>
        <p class="text-gray-600">Típus: {{ db.type }}</p>
      </div>
    </div>
  </div>
</template>
