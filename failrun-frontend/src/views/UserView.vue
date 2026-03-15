<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
import FormulariSessio from '@/components/FormulariSessio.vue'
import InformacioUsuari from '@/components/InformacioUsuari.vue'

const { login, register, logout, isLoggedIn, user } = useAuth()
const router = useRouter()

async function ferLogin(dades) {
  await login(dades.email, dades.password, dades.recordarme)
}

async function ferRegistre(dades) {
  await register(dades.username, dades.email, dades.password)
}
</script>

<template>
  <BarraNavegacio />

  <div class="main-page">

    <!-- Si no hi ha sessió mostrem el formulari -->
    <FormulariSessio
      v-if="!isLoggedIn"
      @login="ferLogin"
      @register="ferRegistre"
    />

    <!-- Si hi ha sessió mostrem el perfil -->
    <template v-else>
      <InformacioUsuari
        v-if="user"
        :usuari="user"
        @logout="logout"
      />
      <button @click="router.push({ name: 'crear-clip' })">
        Crear clip
      </button>
    </template>

  </div>

  <PeuPagina />
</template>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: 5rem auto;
  gap: 2rem;
}

.user-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #41414A;
  border-radius: 20px;
  padding: 3rem;
  width: 100%;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
}

button {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  background-color: #FF2D55;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: #CF2949;
}
</style>
