<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        Nemzetközi Kutatási Infrastruktúrák
      </h1>
      <p class="text-lg text-gray-600 mb-8 leading-relaxed">
        Az AIR2D2 platform modern újratervezése - átlátható adatkezelés, 
        együttműködés elősegítése és fenntartható kutatási szektor
      </p>

      <!-- Key Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <i class="fas fa-search text-blue-600 text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Keresés & Felfedezés</h3>
          <p class="text-gray-600 text-sm">Kutatási intézetek és infrastruktúrák böngészése</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <i class="fas fa-database text-green-600 text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Adatkezelés</h3>
          <p class="text-gray-600 text-sm">Strukturált adatgyűjtés és -közzététel</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <i class="fas fa-globe text-purple-600 text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-800 mb-2">Globális Térkép</h3>
          <p class="text-gray-600 text-sm">Intézmények földrajzi elhelyezkedése</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-x-4">
        <RouterLink
          to="/login"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Bejelentkezés
        </RouterLink>
        <RouterLink
          to="/signup"
          class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Regisztráció
        </RouterLink>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <p class="text-blue-800">
          <strong>Fejlesztés alatt:</strong> AIR2D2 platform modernizálása - 
          korszerű webes megoldás a kutatási infrastruktúrák nyilvántartásához
        </p>
      </div>
    </div>
  </div>
</template>