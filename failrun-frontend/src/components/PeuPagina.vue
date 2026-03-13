<script setup>
</script>

<template>
  <footer>
    <div class="left-footer-content">
      <img id="Logo-footer" src="/styles/img/Logo PLACEHOLDER.png" alt="PLACEHOLDER">
      <h1>FAILRUN.COM</h1>
      <div class="language-switcher">
        <img class="lang-img" src="/styles/img/flag_es.png" alt="ES">
        <img class="lang-img" src="/styles/img/flag_us.png" alt="EN">
      </div>
    </div>

    <div class="center-footer-content">
      <h1>SOBRE NOSALTRES</h1>
      <h2><a href="#">DEV-HUB</a></h2>
      <h2><a href="#">SOBRE EL PROJECTE</a></h2>
      <h2><a href="#">QUI SOM</a></h2>
      <h2><a href="#">BASES DE PUNTUACIÓ</a></h2>
    </div>

    <div class="right-footer-content">
      <h1>XARXES SOCIALS</h1>
      <div class="socials-footer">
        <div class="social-entry">
          <h2><a href="#">TWITTER</a></h2>
          <img src="/styles/img/X-logo.png" alt="Twitter">
        </div>
        <div class="social-entry">
          <h2><a href="#">DISCORD</a></h2>
          <img src="/styles/img/Discord-logo.png" alt="Discord">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #FF2D55;
  color: white;
  margin-top: 2rem;
}

#Logo-footer {
  width: 10rem;
  height: auto;
  margin-bottom: 1rem;
}

.left-footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.333%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 100%;
}

.left-footer-content h1 {
  font-weight: 800;
  font-size: 3.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.language-switcher {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.language-switcher img {
  width: 4rem;
  height: auto;
  margin: 0 1rem;
  cursor: pointer;
}

.center-footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 33.333%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  height: 100%;
}

.center-footer-content h1 {
  font-weight: 800;
  font-size: 2rem;
}

.center-footer-content h2 {
  font-weight: 600;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.center-footer-content h2 > a {
  color: white;
  text-decoration: none;
}

.right-footer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 33.333%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  height: 100%;
}

.right-footer-content h1 {
  font-weight: 800;
  font-size: 2rem;
}

.right-footer-content h2 {
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}

.right-footer-content h2 > a {
  color: white;
  text-decoration: none;
}

.socials-footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.social-entry {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.social-entry img {
  width: 2rem;
  height: auto;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
</style>