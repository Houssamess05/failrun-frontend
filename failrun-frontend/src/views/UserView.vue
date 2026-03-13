<script setup>
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
import InformacioUsuari from '@/components/InformacioUsuari.vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const { usuari } = useAuth()
const router = useRouter()
const formClip = ref(false)
</script>

<template>
  <BarraNavegacio />

  <div class="main-page">
    <InformacioUsuari v-if="usuari" :usuari="usuari" />

    <div v-else class="user-box">
      <h2>¡Bienvenido a FailRun!</h2>
      <p>Inicia sesión o regístrate para disfrutar de la experiencia completa.</p>
    </div>

    <button v-if="usuari" class="btn" @click="router.push({ name: 'crear-clip' })">
      Crear clip
    </button>
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

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  background-color: #FF2D55;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.btn:hover {
  background-color: #CF2949;
}
</style>
