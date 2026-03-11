<script setup>
import BarraNavegacio from '@/components/BarraNavegacio.vue'
import PeuPagina from '@/components/PeuPagina.vue'
</script>

<template>
  <BarraNavegacio />

  <div class="main-page">
    <div class="user-box">
      <h1>Perfil d'usuari</h1>
    </div>
  </div>

  <PeuPagina />
</template>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 85%;
  margin: 5rem auto;
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
}
</style>