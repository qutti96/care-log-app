// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Vue from 'vue'
import firebase from 'firebase/app'
// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBBrLqQBBJwsd93cB7OcX5z5atyw2dl11c',
    authDomain: 'care-log-52672.firebaseapp.com',
    databaseURL: 'https://care-log-52672.firebaseio.com',
    projectId: 'care-log-52672',
    storageBucket: 'care-log-52672.appspot.com',
    messagingSenderId: '169285153749',
    appId: '1:169285153749:web:a6626dc6c38dc35ca5835c',
    measurementId: 'G-5ZX9FGDZGS',
  })
}

const db = firebase.firestore()
export { db }
