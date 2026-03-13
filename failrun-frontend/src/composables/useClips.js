import { ref } from 'vue'

const clips = ref([])

export function useClips() {

  function crearClip(dades) {
    clips.value.push({
      idClip: clips.value.length + 1,
      titol: dades.titol,
      descripcio: dades.descripcio,
      urlYoutube: dades.urlYoutube,
      idJoc: dades.idJoc,
      dataPublicacio: new Date().toISOString(),
      estat: 'pendent'
    })
  }
  return { clips, crearClip }
}