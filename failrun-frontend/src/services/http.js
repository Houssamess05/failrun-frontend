import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Interceptor: afegeix el token JWT a cada petició automàticament
http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default http