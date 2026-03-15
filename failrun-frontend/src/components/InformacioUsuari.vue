<script setup>
const props = defineProps({
  usuari: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['logout'])
</script>

<template>
  <div class="user-box">
    <h1>Perfil del usuario</h1>
    <p>Nombre: {{ props.usuari.username }}</p>
    <p>Correo: {{ props.usuari.email }}</p>
    <button class="btn" @click="emit('logout')">Cerrar sesión</button>
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