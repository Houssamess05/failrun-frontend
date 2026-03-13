<script setup>
</script>

<template>
  <div class="main-slogan">
    <h1 class="main-slogan-upper">
      <span id="red-upper-slogan">Falla</span>.
      <span id="green-upper-slogan">Crea</span>.
      <span id="golden-upper-slogan">Gana</span>.
    </h1>

    <h2 class="main-slogan-lower">FAILRUN.COM</h2>
  </div>
</template>

<style scoped>
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
    padding: 1rem 0 2rem 0;
}

.main-slogan-upper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 7.5rem;
    font-weight: 800;
    margin-bottom: 0;
}

#red-upper-slogan {
    color: #FF383C;
}

#green-upper-slogan {
    color: #34C759;
}

#golden-upper-slogan {
    color: #FFCC00;
}

.main-slogan-lower {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    font-size: 9.688rem;
    font-weight: 800;
    margin-top: -2rem;
    margin-bottom: 1rem;
    text-decoration: underline;
}
</style>