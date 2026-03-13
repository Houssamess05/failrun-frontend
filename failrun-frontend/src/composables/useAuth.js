import { ref } from 'vue'

// Fora de la funció perquè sigui compartit entre tots els components
const usuari = ref(JSON.parse(localStorage.getItem('usuari')) || null)

export function useAuth() {

  function login(dades) {
    usuari.value = dades
    localStorage.setItem('usuari', JSON.stringify(dades))
  }

  function logout() {
    usuari.value = null
    localStorage.removeItem('usuari')
  }

  const estaAutenticat = () => usuari.value !== null

  return { usuari, login, logout, estaAutenticat }
}