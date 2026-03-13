<script setup>
</script>

<template>
  <div class="main-page">
    <div class="main-slogan">
      <h1 class="main-slogan-upper">QUIÉNES SOMOS</h1>
      <h2 class="main-slogan-lower">FAILRUN.COM</h2>
    </div>
    <div class="lower-main">
      <div class="left-panel">
        <div class="lower-main-title">
          <h1>El proyecto</h1>
          <p>
            FailRun nace de una idea simple: cuando intentamos jugar "perfecto", a menudo fallamos… y esos momentos son los más memorables.
            Queremos centralizar clips y rankings de "fails" (vídeos subidos previamente a YouTube) por juego y categorías, para tenerlos
            ordenados y accesibles en un único lugar.
          </p>
          <h1>Objetivo</h1>
          <p>
            Crear un espacio y una pequeña comunidad dentro del mundo gamer para guardar, puntuar y compartir estos momentos: para reír,
            recordar partidas con amigos y, si es necesario, analizar errores para mejorar.
          </p>
        </div>
      </div>
      <div class="right-panel">
        <div class="lower-main-title">
          <h1>Qué vendrá después</h1>
          <p>
            En entregas posteriores, el proyecto se conectará a una base de datos y una API (Symfony) para gestionar datos y rankings
            de forma segura.
          </p>
          <h1>Criterios de puntuación</h1>
          <p>
            La idea es definir estándares claros para puntuar los clips y establecer permisos de moderación para evitar problemas futuros.
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
</style>