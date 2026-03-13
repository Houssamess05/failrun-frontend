<script setup>
import FormulariSessio from '@/components/FormulariSessio.vue'
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { login } = useAuth()

function ferLogin(dades) {
  login(dades)
  router.push({ name: 'home' })
}

function ferRegistre(dades) {
  login(dades)
  router.push({ name: 'perfil' })
}
</script>

<template>
  <BarraNavegacio />
  <div class="main-page">
    <FormulariSessio @login="ferLogin" @register="ferRegistre" />
  </div>
  <PeuPagina />
</template>