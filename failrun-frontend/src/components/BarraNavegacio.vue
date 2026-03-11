<script setup>
</script>

<template>
  <nav class="barra-navegacio">
    <router-link to="/login">
      <img id="Login" src="/styles/img/Profile.svg" alt="Login img">
    </router-link>

    <a class="nav-link" href="#">
      <img id="Logo" src="/styles/img/Logo PLACEHOLDER.png" alt="Logo">
    </a>

    <a class="nav-button" href="#">Juegos</a>
    <a class="nav-button" href="#">Retos</a>
    <a class="nav-button" href="/ajuda">Ayuda</a>
    <a class="nav-button" href="/sobre-nosaltres">Sobre Nosotros</a>
  </nav>
</template>

<style scoped>
.barra-navegacio {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-height: 60px;
    background-color: #FF2D55;
}

#Login {
    width: 65px;
    height: auto;
}

#Logo {
    width: 85px;
    height: auto;
}

.nav-link,
.nav-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 58px;
    text-decoration: none;
    color: white;
    font-weight: bolder;
}

.nav-button {
    border: none;
    background-color: #FF2D55;
    cursor: pointer;
    transition: all 0.5s;
    font-weight: 800;
    font-size: 1.5rem;
}

.nav-button:hover {
    background-color: #CF2949;
}
</style>