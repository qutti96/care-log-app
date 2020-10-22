// import firebase from '~/plugins/firebase'
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
  signInWithEmail({ dispatch }, payload) {
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log('success')
        console.log(payload.email)
        console.log(payload.password)
        dispatch('checkLogin')
      })
      .catch((error) => {
        alert(error)
      })
  },
  checkLogin({ commit }) {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        commit('getData', {
          uid: user.uid,
          email: user.email,
        })
        commit('switchLogin')
      }
    })
  },
  signOut({ commit }){
    auth.signOut()
    commit('switchLogout')
  },
}

export const mutations = {
  getData(state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  switchLogin(state) {
    state.user.login = true
  },
  switchLogout(state) {
    state.user.login = false
  },
}
