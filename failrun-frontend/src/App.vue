<script setup>
import '@/assets/base.css'

import BarraNavegacio from './components/BarraNavegacio.vue'
import EsloganPrincipal from './components/EsloganPrincipal.vue'
import CarruselFails from './components/CarruselFails.vue'
import LlistaTopFive from './components/LlistaTopFive.vue'
import PeuPagina from './components/PeuPagina.vue'
</script>

<template>
  <BarraNavegacio />

  <div class="main-page">
    <EsloganPrincipal />

    <div class="lower-main">
      <div class="left-panel">
        <CarruselFails />
      </div>

      <div class="right-panel">
        <LlistaTopFive />
      </div>
    </div>
  </div>

  <PeuPagina />
</template>