<script setup>
import { ref } from 'vue'

const mostrarRegistre = ref(false)
const emit = defineEmits(['login', 'register'])
const error = ref('')

// Login
const email = ref('')
const contrasenya = ref('')
const recordarme = ref(false)

// Registre
const correuRegistre = ref('')
const nomUsuari = ref('')
const contrasenyaRegistre = ref('')

async function gestionarLogin() {
  error.value = ''
  try {
    emit('login', { email: email.value, password: contrasenya.value, recordarme: recordarme.value })
  } catch (e) {
    error.value = 'Credencials incorrectes'
  }
}

async function gestionarRegistre() {
  error.value = ''
  try {
    emit('register', { username: nomUsuari.value, email: correuRegistre.value, password: contrasenyaRegistre.value })
  } catch (e) {
    error.value = 'Error en el registre'
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-box">

      <div v-if="!mostrarRegistre">
        <h1>Iniciar Sessió</h1>
        <div class="login-form">
          <input v-model="email" type="email" placeholder="Correu" />
          <input v-model="contrasenya" type="password" placeholder="Contrasenya" />

          <!-- Checkbox recordarme -->
          <label>
            <input type="checkbox" v-model="recordarme" />
            Recorda'm
          </label>

          <p v-if="error" class="error">{{ error }}</p>
          <button @click="gestionarLogin">Entrar</button>
        </div>
        <div class="register-link">
          <p>Encara no tens compte?
            <a href="#" @click.prevent="mostrarRegistre = true">Registra't aquí</a>
          </p>
        </div>
      </div>

      <div v-else>
        <h1>Registre</h1>
        <div class="login-form">
          <input v-model="correuRegistre" type="email" placeholder="Correu" />
          <input v-model="nomUsuari" type="text" placeholder="Nom d'usuari" />
          <input v-model="contrasenyaRegistre" type="password" placeholder="Contrasenya" />
          <p v-if="error" class="error">{{ error }}</p>
          <button @click="gestionarRegistre">Registrar-se</button>
        </div>
        <div class="register-link">
          <p>Ja tens compte?
            <a href="#" @click.prevent="mostrarRegistre = false">Inicia sessió</a>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #41414A;
  border-radius: 20px;
  padding: 3rem 4rem;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
  width: 400px;
}

h1 {
  color: white;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

input {
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: #2a2a3e;
  color: white;
}

input::placeholder {
  color: #aaa;
}

button {
  padding: 0.75rem;
  border-radius: 8px;
  background-color: #e63946;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #c1121f;
}

.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #aaa;
}

.register-link a {
  color: #e63946;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>