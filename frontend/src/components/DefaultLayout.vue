<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold tracking-tight flex items-center">
            <i class="fas fa-flask mr-2"></i>
            AIR2D2 Platform
          </div>
          <div class="flex items-center space-x-6">
            <RouterLink 
              to="/dashboard" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              :class="{ 'bg-blue-500 text-white': $route.name === 'dashboard' }"
            >
              Vezérlőpult
            </RouterLink>
            <RouterLink 
              to="/dashboard/exposure-platforms" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              :class="{ 'bg-blue-500 text-white': $route.name === 'exposureplatforms' }"
            >
              Exposure Platforms
            </RouterLink>
            <RouterLink 
              to="/dashboard/databases" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              :class="{ 'bg-blue-500 text-white': $route.name === 'databases' }"
            >
              Databases
            </RouterLink>
            <RouterLink 
              to="/dashboard/analytical-platforms" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              :class="{ 'bg-blue-500 text-white': $route.name === 'analyticalplatforms' }"
            >
              Analytical Platforms
            </RouterLink>
            <RouterLink 
              to="/dashboard/global-map" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              :class="{ 'bg-blue-500 text-white': $route.name === 'globalmap' }"
            >
              Global Map
            </RouterLink>
            <RouterLink 
              to="/dashboard/profile" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              :class="{ 'bg-blue-500 text-white': $route.name === 'profile' }"
            >
              Profil
            </RouterLink>
            <button 
              @click="logout" 
              class="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 font-medium shadow-sm"
            >
              Kijelentkezés
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-1 container mx-auto px-6 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-6">
      <div class="container mx-auto px-6 text-center text-gray-600">
        © 2025 AIR2D2 Platform - Nemzetközi Kutatási Infrastruktúrák
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>