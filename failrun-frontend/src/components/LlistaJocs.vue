<script setup>
const jocs = [
  { foto: '/styles/img/joc1.png', nom: 'Joc 1' },
  { foto: '/styles/img/joc2.png', nom: 'Joc 2' },
  { foto: '/styles/img/joc3.png', nom: 'Joc 3' },
  { foto: '/styles/img/joc4.png', nom: 'Joc 4' },
  { foto: '/styles/img/joc5.png', nom: 'Joc 5' },
  { foto: '/styles/img/joc6.png', nom: 'Joc 6' },
  { foto: '/styles/img/joc7.png', nom: 'Joc 7' },
  { foto: '/styles/img/joc8.png', nom: 'Joc 8' },
  { foto: '/styles/img/joc9.png', nom: 'Joc 9' },
  { foto: '/styles/img/joc10.png', nom: 'Joc 10' },
  { foto: '/styles/img/joc11.png', nom: 'Joc 11' },
  { foto: '/styles/img/joc12.png', nom: 'Joc 12' },
]
</script>

<template>
  <div class="llista-jocs-page">
    <div class="llista-jocs-titol">
      <h1>JUEGOS</h1>
    </div>
    <div class="llista-jocs-grid">
      <div class="joc-card" v-for="(joc, i) in jocs" :key="i">
        <div class="joc-foto">
          <span>FOTO</span>
        </div>
        <div class="joc-nom">
          <span>{{ joc.nom }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.llista-jocs-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: 3rem auto;
}

.llista-jocs-titol {
  background-color: #41414A;
  border-radius: 20px;
  padding: 0.5rem 4rem;
  margin-bottom: 2rem;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.5);
}

.llista-jocs-titol h1 {
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
}

.llista-jocs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.joc-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 8px 8px 6px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.2s;
}

.joc-card:hover {
  transform: scale(1.03);
}

.joc-foto {
  background-color: #c0c0c0;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-weight: 600;
  font-size: 1rem;
}

.joc-nom {
  background-color: #FF2D55;
  width: 100%;
  text-align: center;
  padding: 0.4rem 0;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
}
</style>