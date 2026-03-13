<script setup>
import { ref } from 'vue'

const emit = defineEmits(['crear-clip'])

const titol = ref('')
const descripcio = ref('')
const urlYoutube = ref('')
const idJoc = ref('')

function gestionarCreacio() {
  emit('crear-clip', {
    titol: titol.value,
    descripcio: descripcio.value,
    urlYoutube: urlYoutube.value,
    idJoc: idJoc.value
  })
}
</script>

<template>
  <div class="formulari-clip">
    <h1>Crear Clip</h1>
    <div class="form">
      <input v-model="titol" type="text" placeholder="Títol del clip" />
      <textarea v-model="descripcio" placeholder="Descripció"></textarea>
      <input v-model="urlYoutube" type="url" placeholder="URL de YouTube" />
      <select v-model="idJoc">
        <option value="" disabled>Selecciona un joc</option>
        <option value="1">Joc 1</option>
        <option value="2">Joc 2</option>
      </select>
      <button @click="gestionarCreacio">Publicar Clip</button>
    </div>
  </div>
</template>

<style scoped>
.formulari-clip {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #41414A;
  border-radius: 20px;
  padding: 3rem 4rem;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
}

h1 {
  color: white;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

input, textarea, select {
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: #2a2a3e;
  color: white;
  font-family: inherit;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  color: #aaa;
}

select option {
  background-color: #2a2a3e;
}

button {
  padding: 0.75rem;
  border-radius: 8px;
  background-color: #FF2D55;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #CF2949;
}
</style>