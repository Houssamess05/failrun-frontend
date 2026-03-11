<script setup>
import FormulariSessio from '@/components/FormulariSessio.vue'
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function ferLogin() {
  router.push({ name: 'home' })
}

function ferRegistre() {
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