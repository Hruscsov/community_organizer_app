<script setup>
import { ref } from 'vue'

const mapData = ref([
  { name: 'Intézet 1', lat: 48.8566, lng: 2.3522 },
  { name: 'Intézet 2', lat: 51.5074, lng: -0.1278 }
])
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Globális térkép</h1>
    <p class="text-gray-600 mb-6">
      Itt láthatók a nemzetközi kutatási infrastruktúrák földrajzi elhelyezkedései.
    </p>

    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <!-- Ide lehet majd beilleszteni egy interaktív térképet pl. Leaflet vagy Google Maps -->
      <div class="h-96 flex items-center justify-center text-gray-400">
        Térkép helye
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Extra stílusok, ha kell */
</style>
