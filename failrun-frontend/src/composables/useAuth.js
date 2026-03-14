import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { apiLogin, apiGetUserInfo, apiRegister } from '../services/api'

const token = ref(localStorage.getItem('token') || sessionStorage.getItem('token') || null)
const user = ref(null)

export function useAuth() {
    const router = useRouter()

    const isLoggedIn = computed(() => !!token.value)
    const estaAutenticat = () => !!token.value

    const login = async (email, password, recordarme) => {
        const response = await apiLogin(email, password)
        token.value = response.data.token

        if (recordarme) {
            localStorage.setItem('token', token.value)
        } else {
            sessionStorage.setItem('token', token.value)
        }

        await fetchUser()
        router.push({ name: 'home' })
    }

    const register = async (username, email, password) => {
        await apiRegister(username, email, password)
        router.push({ name: 'login' })
    }

    const logout = () => {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        router.push({ name: 'login' })
    }

    const fetchUser = async () => {
        if (!token.value) return
        const response = await apiGetUserInfo()
        user.value = response.data.data
    }

    return { token, user, isLoggedIn, estaAutenticat, login, register, logout, fetchUser }
}