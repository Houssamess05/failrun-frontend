<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { src: 'https://www.youtube.com/embed/61ysdXbuV5o?autoplay=1&mute=1', title: 'Best Pleier' },
  { src: 'https://www.youtube.com/embed/FWFXu3o8Lcg', title: 'Vantage my beloved' },
  { src: 'https://www.youtube.com/embed/PO2NPR6Odig', title: 'Que ya se que explotan' },
  { src: 'https://www.youtube.com/embed/rcvcDrS_Ak0', title: 'Y volé' },
  { src: 'https://www.youtube.com/embed/JalRthOln90', title: 'Ostia aguanto el coche con mi cabe-' }
]

const index = ref(0)
let interval = null

function goTo(i) {
  index.value = (i + slides.length) % slides.length
}

function startAuto() {
  clearInterval(interval)
  interval = setInterval(() => goTo(index.value + 1), 600000000)
}

function resetAuto() {
  clearInterval(interval)
  startAuto()
}

onMounted(() => {
  goTo(0)
  startAuto()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="lower-main-title">
    <h1 id="main-title-left-panel">RANDOM FAILS!</h1>
    <div
      class="carousel"
      aria-label="Carrusel de vídeos"
      @mouseover="clearInterval(interval)"
      @mouseout="startAuto"
    >
      <div class="carousel-track" :style="{ transform: `translateX(${-index * 100}%)` }">
        <div class="carousel-slide" v-for="(slide, i) in slides" :key="i">
          <iframe
            :src="slide.src"
            :title="slide.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <button class="carousel-btn prev" aria-label="Anterior" @click="() => { goTo(index - 1); resetAuto() }">
        <img class="arrows-img-carousel" src="/styles/img/Left-Carousel.png" alt="Anterior">
      </button>
      <button class="carousel-btn next" aria-label="Siguiente" @click="() => { goTo(index + 1); resetAuto() }">
        <img class="arrows-img-carousel" src="/styles/img/Right-Carousel.png" alt="Siguiente">
      </button>

      <div class="carousel-dots" aria-label="Paginació">
        <button
          v-for="(slide, i) in slides"
          :key="i"
          class="dot"
          :class="{ active: index === i }"
          :data-index="i"
          :aria-label="`Slide ${i + 1}`"
          @click="() => { goTo(i); resetAuto() }"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #111;
}

.carousel-track {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: transform 0.5s ease;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide iframe {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  min-height: 300px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0);
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.carousel-btn.prev { left: -1.75rem; }
.carousel-btn.next { right: -1.75rem; }

.carousel-dots {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  border: none;
  cursor: pointer;
  padding: 0;
}

.dot.active { background: #fff; }

.arrows-img-carousel {
  width: 5rem;
  height: auto;
}

#main-title-left-panel {
  color: white;
  font-weight: 700;
  margin-top: 0;
}
.lower-main-title {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
}

.carousel {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
}
</style>