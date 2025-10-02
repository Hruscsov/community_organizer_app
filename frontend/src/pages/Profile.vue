<script setup>
import { ref } from 'vue'

// Mock adatok - később API-ból jönnek
const user = ref({
  name: 'Kovács János',
  email: 'kovacs.janos@example.com',
  phone: '+36 30 123 4567',
  position: 'Rendezvényszervező',
  memberSince: '2024. január 15.'
})

const isEditing = ref(false)
const editedUser = ref({...user.value})

const saveProfile = () => {
  user.value = {...editedUser.value}
  isEditing.value = false
  // Itt majd API hívás lesz
}

const cancelEdit = () => {
  editedUser.value = {...user.value}
  isEditing.value = false
}
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-6">
    <!-- Fejléc -->
    <div class="bg-white p-6 rounded-xl shadow-md">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Profilom</h1>
          <p class="text-gray-600 mt-2">Kezeld a személyes adataidat és beállításaidat</p>
        </div>
        <button 
          @click="isEditing = !isEditing"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
        >
          {{ isEditing ? 'Mégse' : 'Profil szerkesztése' }}
        </button>
      </div>
    </div>

    <!-- Profil információk -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Bal oldal - Profil kártya -->
      <div class="bg-white p-6 rounded-xl shadow-md lg:col-span-1">
        <div class="text-center">
          <!-- Profilkép placeholder -->
          <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold mb-4">
            {{ user.name.charAt(0) }}
          </div>
          <h2 class="text-xl font-semibold text-gray-800">{{ user.name }}</h2>
          <p class="text-gray-600">{{ user.position }}</p>
          <div class="mt-4 p-3 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-700">Tag since {{ user.memberSince }}</p>
          </div>
        </div>
      </div>

      <!-- Jobb oldal - Adatok -->
      <div class="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">Személyes adatok</h3>
        
        <div class="space-y-6">
          <!-- Név -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Teljes név</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.name"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg">{{ user.name }}</p>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email cím</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg">{{ user.email }}</p>
          </div>

          <!-- Telefon -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Telefonszám</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.phone"
              type="tel"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg">{{ user.phone }}</p>
          </div>

          <!-- Pozíció -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Pozíció</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.position"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg">{{ user.position }}</p>
          </div>

          <!-- Menti gombok -->
          <div v-if="isEditing" class="flex space-x-4 pt-4">
            <button 
              @click="saveProfile"
              class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
            >
              Mentes
            </button>
            <button 
              @click="cancelEdit"
              class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200 font-medium"
            >
              Mégse
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Statisztika kártyák -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">12</div>
        <div class="text-blue-100">Létrehozott esemény</div>
      </div>
      <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">47</div>
        <div class="text-green-100">Résztvevő összesen</div>
      </div>
      <div class="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
        <div class="text-3xl font-bold mb-2">3</div>
        <div class="text-purple-100">Aktív esemény</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Egy kis extra animáció */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>