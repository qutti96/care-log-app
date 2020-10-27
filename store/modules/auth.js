import { auth } from '~/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    login: false,
  },
})

export const getters = {
  user: (state) => {
    return state.user
  },
}

export const actions = {
  async signInWithEmail({ dispatch }, payload) {
    try {
      await auth.signInWithEmailAndPassword(payload.email, payload.password)
      dispatch('checkLogin')
    } catch (error) {
      alert(error)
    }
  },
  checkLogin({ commit }) {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        commit('login', {
          uid: user.uid,
          email: user.email,
        })
      }
    })
    $nuxt.$router.push('/')
  },
  async signOut({ commit }) {
    await auth.signOut()
    commit('switchLogout')
  },
}

export const mutations = {
  login(state, payload) {
    state.user = payload
    state.user.login = true
  },
  switchLogout(state) {
    state.user = {
      ...state.user,
      login: false,
    }
  },
}
