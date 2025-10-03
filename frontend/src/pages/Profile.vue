<script setup>
import { ref } from 'vue'

// Mock adatok kutatási intézet számára
const user = ref({
  name: 'Dr. Kovács János',
  email: 'kovacs.janos@kutatointezet.hu',
  phone: '+36 30 123 4567',
  position: 'Kutatási vezető',
  institution: 'Magyar Tudományos Akadémia',
  department: 'Részecskefizikai Intézet',
  researchArea: 'Magfizika, Részecskedetektálás',
  memberSince: '2022. március 15.'
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

// Kutatási statisztikák
const researchStats = ref({
  publications: 24,
  researchProjects: 8,
  collaborations: 15,
  citations: 156
})
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- Fejléc -->
    <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Kutatási Profil</h1>
          <p class="text-gray-600 mt-2">Személyes adatok és kutatási tevékenység kezelése</p>
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
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Bal oldal - Profil kártya -->
      <div class="bg-white p-6 rounded-xl shadow-md lg:col-span-1 border border-gray-200">
        <div class="text-center">
          <!-- Profilkép placeholder -->
          <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold mb-4">
            {{ user.name.charAt(0) }}
          </div>
          <h2 class="text-xl font-semibold text-gray-800">{{ user.name }}</h2>
          <p class="text-gray-600 text-sm mt-1">{{ user.position }}</p>
          <p class="text-blue-600 text-sm font-medium mt-2">{{ user.institution }}</p>
          
          <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p class="text-sm text-blue-700">
              <i class="fas fa-calendar-alt mr-2"></i>
              Tag since {{ user.memberSince }}
            </p>
          </div>

          <!-- Gyors statisztikák -->
          <div class="mt-6 space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Publikációk:</span>
              <span class="font-semibold text-blue-600">{{ researchStats.publications }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Projektek:</span>
              <span class="font-semibold text-green-600">{{ researchStats.researchProjects }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Együttműködések:</span>
              <span class="font-semibold text-purple-600">{{ researchStats.collaborations }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Jobb oldal - Adatok -->
      <div class="bg-white p-6 rounded-xl shadow-md lg:col-span-3 border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">Személyes adatok</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Név -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Teljes név</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.name"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg font-medium">{{ user.name }}</p>
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

          <!-- Intézmény -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Intézmény</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.institution"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg">{{ user.institution }}</p>
          </div>

          <!-- Osztály/Részleg -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Osztály/Részleg</label>
            <input 
              v-if="isEditing"
              v-model="editedUser.department"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
            <p v-else class="text-gray-900 text-lg">{{ user.department }}</p>
          </div>

          <!-- Kutatási terület -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Kutatási terület</label>
            <textarea 
              v-if="isEditing"
              v-model="editedUser.researchArea"
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            ></textarea>
            <p v-else class="text-gray-900 text-lg">{{ user.researchArea }}</p>
          </div>
        </div>

        <!-- Menti gombok -->
        <div v-if="isEditing" class="flex space-x-4 pt-6 mt-6 border-t border-gray-200">
          <button 
            @click="saveProfile"
            class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium"
          >
            <i class="fas fa-save mr-2"></i>
            Mentes
          </button>
          <button 
            @click="cancelEdit"
            class="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200 font-medium"
          >
            <i class="fas fa-times mr-2"></i>
            Mégse
          </button>
        </div>
      </div>
    </div>

    <!-- Kutatási statisztika kártyák -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold mb-2">{{ researchStats.publications }}</div>
            <div class="text-blue-100">Publikációk</div>
          </div>
          <i class="fas fa-file-alt text-2xl opacity-80"></i>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold mb-2">{{ researchStats.researchProjects }}</div>
            <div class="text-green-100">Kutatási projektek</div>
          </div>
          <i class="fas fa-project-diagram text-2xl opacity-80"></i>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold mb-2">{{ researchStats.collaborations }}</div>
            <div class="text-purple-100">Együttműködések</div>
          </div>
          <i class="fas fa-handshake text-2xl opacity-80"></i>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-md">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-3xl font-bold mb-2">{{ researchStats.citations }}</div>
            <div class="text-orange-100">Hivatkozások</div>
          </div>
          <i class="fas fa-quote-right text-2xl opacity-80"></i>
        </div>
      </div>
    </div>

    <!-- Legutóbbi tevékenység -->
    <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Legutóbbi tevékenység</h3>
      <div class="space-y-3">
        <div class="flex items-center p-3 bg-blue-50 rounded-lg">
          <i class="fas fa-database text-blue-600 mr-3"></i>
          <div>
            <p class="text-sm font-medium">Intézeti adatok frissítve</p>
            <p class="text-xs text-gray-600">2024. január 15. - 14:32</p>
          </div>
        </div>
        <div class="flex items-center p-3 bg-green-50 rounded-lg">
          <i class="fas fa-search text-green-600 mr-3"></i>
          <div>
            <p class="text-sm font-medium">Új kutatási partner hozzáadva</p>
            <p class="text-xs text-gray-600">2024. január 12. - 09:15</p>
          </div>
        </div>
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