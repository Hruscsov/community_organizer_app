<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref(null)

const handleLogin = async () => {
  error.value = null
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      password: password.value
    })

    const token = response.data.access_token
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    router.push('/dashboard')
  } catch (err) {
    error.value = 'Hiba: ' + (err.response?.data?.message || 'Ismeretlen hiba')
    console.error(err)
  }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Bejelentkezés</h1>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="pelda@domain.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Jelszó</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Belépés
          </button>
        </form>

        <p v-if="error" class="mt-4 text-red-600 text-sm text-center">
          {{ error }}
        </p>

        <p class="mt-6 text-center text-sm text-gray-600">
          Nincs még fiókod?
          <RouterLink to="/signup" class="text-blue-600 hover:underline">Regisztrálj itt</RouterLink>
        </p>
      </div>
    </div>
</template>
