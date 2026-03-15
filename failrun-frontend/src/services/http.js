import axios from 'axios'
// Creem una instància d'Axios amb la configuració bàsica
const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Interceptor: afegeix el token JWT a cada petició automàticament
http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    //Si hi ha una sessió activa, afegim el token a les capçaleres de la petició
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default http