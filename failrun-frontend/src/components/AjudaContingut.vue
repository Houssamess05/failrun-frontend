<script setup>
</script>

<template>
  <div class="main-page">
    <div class="main-slogan">
      <h1 class="main-slogan-upper">AYUDA</h1>
      <h2 class="main-slogan-lower">FAILRUN.COM</h2>
    </div>
    <div class="lower-main">
      <div class="left-panel">
        <div class="lower-main-title">
          <h1>Cómo funciona</h1>
          <p>
            FailRun recopila "fails" de videojuegos (clips subidos a YouTube) y los organiza por juego y categoría. El objetivo es tener
            los momentos divertidos centralizados y fáciles de encontrar.
          </p>
          <h1>Subir un clip</h1>
          <p>
            En esta fase (landing) todavía no existe una subida real. Más adelante, se podrá añadir el enlace del vídeo y la información
            del juego a través del backend.
          </p>
        </div>
      </div>
      <div class="right-panel">
        <div class="lower-main-title">
          <h1>Preguntas frecuentes</h1>
          <p>
            <strong>¿Por qué algunos botones llevan a páginas simples?</strong><br>
            Porque esta entrega es solo el frontend. La parte de datos y gestión se realizará con Symfony en una entrega posterior.
          </p>
          <p>
            <strong>¿Qué tipo de vídeos se aceptarán?</strong><br>
            Clips públicos de YouTube relacionados con "fails", organizados por juego y categorías.
          </p>
          <p>
            <strong>¿Cómo se puntuará?</strong><br>
            Se definirán unos criterios de puntuación y moderación para mantener coherencia y evitar abusos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 5rem auto;
}

.main-slogan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #41414A;
  width: 100%;
  border-radius: 20px;
  margin-top: 3rem;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
}

.main-slogan-upper {
  color: white;
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 0;
}

.main-slogan-lower {
  color: white;
  font-size: 6rem;
  font-weight: 800;
  margin-top: -2rem;
  text-decoration: underline;
}

.lower-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin-top: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  gap: 1rem;
}

.left-panel, .right-panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #41414A;
  width: 100%;
  border-radius: 20px;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
}

.lower-main-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin: 2rem 0;
}

.lower-main-title h1 {
  color: white;
  font-weight: 700;
  margin-top: 0;
}

.lower-main-title p {
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
}

.lower-main-title strong {
  color: white;
}
</style>