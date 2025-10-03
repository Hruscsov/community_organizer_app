<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <RouterLink to="/" class="text-xl font-bold text-blue-600 flex items-center">
          <i class="fas fa-flask mr-2"></i>
          AIR2D2 Platform
        </RouterLink>
        <nav class="flex items-center space-x-6">
          <RouterLink to="/" class="text-gray-700 hover:text-blue-600 font-medium">Főoldal</RouterLink>
          <RouterLink to="/login" class="text-gray-700 hover:text-blue-600 font-medium">Bejelentkezés</RouterLink>
          <RouterLink to="/signup" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Regisztráció
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-200 py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="mb-2">&copy; 2025 AIR2D2 Platform - Nemzetközi Kutatási Infrastruktúrák</p>
        <p class="text-gray-400 text-sm">A régi AIR2D2 platform modern újratervezése</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>