import BrowserCookies from 'js-cookie'
const TTL = 90

export default {
  setLoading: (state, loading) => {
    state.loading = loading
  },
  setUser: (state, user) => {
    state.user = user
    BrowserCookies.set('user', JSON.stringify(user), { expires: TTL })
  },
  setAuth: (state, auth) => {
    state.auth = auth
    BrowserCookies.set('auth', JSON.stringify(auth), { expires: TTL })
  }
}
