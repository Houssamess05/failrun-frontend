import http from './http'

export const apiLogin = (email, password) => {
    return http.post('/failrun/api/login', { email, password })
}

export const apiRegister = (username, email, password) => {
    return http.post('/failrun/api/register', { username, email, password })
}

export const apiGetUserInfo = () => {
    return http.get('/failrun/api/get-user-info')
}