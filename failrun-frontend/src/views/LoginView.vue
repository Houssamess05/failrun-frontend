<script setup>
import FormulariSessio from '@/components/FormulariSessio.vue'
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
import { useAuth } from '@/composables/useAuth'

const { login, register } = useAuth()

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
    <FormulariSessio @login="ferLogin" @register="ferRegistre" />
  </div>
  <PeuPagina />
</template>