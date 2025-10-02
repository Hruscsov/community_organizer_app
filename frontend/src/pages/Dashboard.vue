<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="space-y-6">
    <!-- Üdvözlés -->
    <div class="bg-white p-6 rounded-xl shadow-md">
      <h1 class="text-3xl font-bold mb-2">Üdvözöllek a Dashboardon!</h1>
      <p class="text-gray-600">Itt kezdheted a keresést az elérhetőségek között.</p>
    </div>

    <!-- Funkciók / menüpontok -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <h2 class="text-xl font-semibold mb-2">Keresés az adatbázisokban</h2>
        <p class="text-gray-700">Indítsd el a fő keresést és böngészd az elérhetőségeket.</p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Keresés</button>
      </div>

      <div class="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <h2 class="text-xl font-semibold mb-2">Profil kezelése</h2>
        <p class="text-gray-700">Nézd meg a profilodat, módosítsd az adatokat.</p>
        <button class="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Profil</button>
      </div>

      <div class="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
        <h2 class="text-xl font-semibold mb-2">Segítség / Dokumentáció</h2>
        <p class="text-gray-700">Olvasd el a dokumentációt vagy segítséget kérhetsz.</p>
        <button class="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Megnézem</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Kicsit több vizuális tér a dashboardon */
</style>
