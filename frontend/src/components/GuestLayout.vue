<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <RouterLink to="/" class="text-xl font-bold text-blue-600">Concert</RouterLink>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-grow flex items-center justify-center">
      <!-- Itt töltődik be a Home/Login/Signup -->
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-200 py-4 text-center">
      <p>&copy; 2025 Concert Infrastructures</p>
    </footer>
  </div>
</template>

<style scoped>
</style>
