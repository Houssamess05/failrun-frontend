<script setup>
</script>

<template>
<nav class="menu">
  <div class="item">
    <router-link to="/perfil">
      <img src="/styles/img/Profile.svg" alt="Perfil">
    </router-link>
  </div>

  <div class="item">
    <router-link to="/">
      <img src="/styles/img/Logo PLACEHOLDER.png" alt="Logo">
    </router-link>
  </div>

  <div class="item"><router-link to="/jocs">Juegos</router-link></div>
  <div class="item"><router-link to="/retos">Retos</router-link></div>
  <div class="item"><router-link to="/ajuda">Ayuda</router-link></div>
  <div class="item"><router-link to="/sobre-nosaltres">Sobre Nosotros</router-link></div>
</nav>
</template>

<style scoped>
.menu {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  background-color: #FF2D55;
  height: 85px;
  padding: 0 10px;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;              /* el div ocupa toda la altura */
  cursor: pointer;           /* cursor de botón */
  transition: background 0.3s;
}

.item:hover {
  background-color: #CF2949; /* rojo más oscuro al pasar */
}

.item a {
  color: white;
  font-weight: 800;
  font-size: 1.4rem;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;             /* el link también ocupa todo */
  justify-content: center;
  align-items: center;
}

/* Tamaño de imágenes */
.item img {
  height: 60px;
  object-fit: contain;
}
</style>