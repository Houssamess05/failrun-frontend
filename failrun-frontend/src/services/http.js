import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default http
```

**3. Crear `.env`** a l'arrel del projecte:
```
VITE_API_URL="http://localhost:8000/api/"