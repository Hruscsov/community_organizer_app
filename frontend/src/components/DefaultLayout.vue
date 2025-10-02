<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header / Menü -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold tracking-tight">Concert Infrastructures</div>
          <div class="flex items-center space-x-6">
            <RouterLink 
              to="/dashboard" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              active-class="bg-blue-500 text-white"
            >
              Dashboard
            </RouterLink>
            <RouterLink 
              to="/profile" 
              class="hover:text-blue-200 transition duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-500"
              active-class="bg-blue-500 text-white"
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

    <!-- Fő tartalom -->
    <main class="flex-1 container mx-auto px-6 py-8">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 py-6">
      <div class="container mx-auto px-6 text-center text-gray-600">
        © 2025 Concert Infrastructures - Minden jog fenntartva
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