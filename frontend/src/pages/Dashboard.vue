<script setup>
import { ref } from 'vue'

const researchStats = ref({
  institutions: 47,
  researchAreas: 12,
  activeProjects: 8,
  countries: 15
})
</script>

<template>
  <div class="space-y-6">
    <!-- Welcome -->
    <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">Vezérlőpult</h1>
      <p class="text-gray-600">Nemzetközi kutatási infrastruktúrák nyilvántartása és kezelése</p>
    </div>

    <!-- Research Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">{{ researchStats.institutions }}</div>
        <div class="text-blue-100">Regisztrált intézetek</div>
      </div>
      <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">{{ researchStats.researchAreas }}</div>
        <div class="text-green-100">Kutatási területek</div>
      </div>
      <div class="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">{{ researchStats.activeProjects }}</div>
        <div class="text-purple-100">Aktív projektek</div>
      </div>
      <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">{{ researchStats.countries }}</div>
        <div class="text-orange-100">Országok</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-blue-200">
        <h2 class="text-xl font-semibold mb-2 text-blue-800">Intézetek keresése</h2>
        <p class="text-blue-600">Kutatási intézetek böngészése és szűrése</p>
      </div>

      <div class="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-green-200">
        <h2 class="text-xl font-semibold mb-2 text-green-800">Globális térkép</h2>
        <p class="text-green-600">Intézmények földrajzi megjelenítése</p>
      </div>

      <div class="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-purple-200">
        <h2 class="text-xl font-semibold mb-2 text-purple-800">Adatkezelés</h2>
        <p class="text-purple-600">Intézeti adatok frissítése</p>
      </div>
    </div>
  </div>
</template>