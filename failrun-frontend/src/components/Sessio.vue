<script setup>
import { ref } from 'vue'

const usuari = ref('')
const password = ref('')

function login() {
  console.log(usuari.value, password.value)
}
</script>

<template>
  <div class="sessio">
    <h2>Iniciar sessió</h2>

    <form @submit.prevent="login">
      <input v-model="usuari" placeholder="Usuari">
      <input v-model="password" type="password" placeholder="Contrasenya">

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>