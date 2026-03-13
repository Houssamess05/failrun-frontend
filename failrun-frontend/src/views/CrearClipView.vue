<script setup>
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
import FormulariClip from '@/components/FormulariClip.vue'
import { useRouter } from 'vue-router'
import { useClips } from '@/composables/useClips'

const router = useRouter()
const { crearClip } = useClips()

function gestionarCreacio(dades) {
  crearClip(dades)
  router.push({ name: 'home' })
}
</script>

<template>
  <BarraNavegacio />
  <div class="main-page">
    <FormulariClip @crear-clip="gestionarCreacio" />
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
}
</style>