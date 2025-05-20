<!-- src/components/LoginPage.vue -->
<template>
  <div>
    <h1>Bejelentkezés</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Jelszó" required />
      <button type="submit">Belépés</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

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

    console.log('Sikeres bejelentkezés:', response.data)
    
    router.push('/hello')
  } catch (err) {
    error.value = 'Hiba: ' + (err.response?.data?.message || 'Ismeretlen hiba')
    console.error(err)
  }
}
</script>
