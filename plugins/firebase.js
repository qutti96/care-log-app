// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Vue from 'vue'
import firebase from 'firebase/app'
// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()
const auth = firebase.auth()
export { db, auth }
