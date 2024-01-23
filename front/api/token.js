import Cookie from 'js-cookie'

const AUTH_TOKEN = 'auth-token'

export const getToken = () => Cookie.get(AUTH_TOKEN)
export const setToken = token => Cookie.set(AUTH_TOKEN, token)
export const deleteToken = () => {
    Cookie.remove(AUTH_TOKEN, { path: '/' })
    Cookie.remove('auth-token')
}
