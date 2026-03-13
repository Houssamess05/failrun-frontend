<script setup>
const props = defineProps({
  usuari: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="user-box">
    <h1>Perfil d'usuari</h1>
    <p>Nom: {{ props.usuari.nomUsuari }}</p>
    <p>Correu: {{ props.usuari.correu }}</p>
  </div>
</template>

<style scoped>
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

h1 {
  font-weight: 800;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #ccc;
}
</style>