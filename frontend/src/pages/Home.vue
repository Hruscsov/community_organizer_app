
<script setup>

</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-4">
      Üdvözlünk a Concert Infrastructures új weboldalán 🎶
    </h1>
    <p class="text-lg text-gray-600 max-w-2xl mb-6">
      Ez a projekt célja, hogy korszerű és átlátható módon mutassa be az infrastruktúrát,
      tevékenységeket és dokumentumokat.  
      Jelentkezz be vagy regisztrálj, hogy további tartalmakhoz is hozzáférj!
    </p>

    <div class="space-x-4">
      <RouterLink
        to="/login"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Bejelentkezés
      </RouterLink>
      <RouterLink
        to="/signup"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Regisztráció
      </RouterLink>
    </div>
  </div>
</template>
