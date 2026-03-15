import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { apiLogin, apiGetUserInfo, apiRegister } from '../services/api'

const token = ref(localStorage.getItem('token') || sessionStorage.getItem('token') || null)
const user = ref(JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user') || 'null'))

export function useAuth() {
    const router = useRouter()

    const isLoggedIn = computed(() => !!token.value)
    const estaAutenticat = () => !!token.value

    const login = async (email, password, recordarme) => {
        const response = await apiLogin(email, password)
        token.value = response.data.token

        // Primero guardamos el token en storage
        if (recordarme) {
            localStorage.setItem('token', token.value)
        } else {
            sessionStorage.setItem('token', token.value)
        }

        // Ahora fetchUser puede leer el token del storage
        await fetchUser()

        // Guardamos user en storage junto al token
        if (recordarme) {
            localStorage.setItem('user', JSON.stringify(user.value))
        } else {
            sessionStorage.setItem('user', JSON.stringify(user.value))
        }

        router.push({ name: 'perfil' })
    }

    const register = async (username, email, password) => {
        await apiRegister(username, email, password)
        await login(email, password, false)
    }

    const logout = () => {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        router.push({ name: 'perfil' })
    }

    const fetchUser = async () => {
        if (!token.value) return
        const response = await apiGetUserInfo()
        user.value = response.data.data
    }

    return { token, user, isLoggedIn, estaAutenticat, login, register, logout, fetchUser }
}