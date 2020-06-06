import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

// この部分を Web から取得したキーへと変更してください。
const config = {
  apiKey: "AIzaSyCYX7rJxng2KDtop_R0VmcSqil-2bWYNjE",
  authDomain: "jslounge-handson-15.firebaseapp.com",
  databaseURL: "https://jslounge-handson-15.firebaseio.com",
  projectId: "jslounge-handson-15",
  storageBucket: "jslounge-handson-15.appspot.com",
  messagingSenderId: "110840786056"
}
const settings = { timestampsInSnapshots: true }

firebase.initializeApp(config)

Vue.use(Vuex)
Vue.prototype.$firebase = firebase

// 以下は Firebase の初期化後に Vuex ストアを生成するためのコードです。
async function createStore() {
  await firebase.auth()
  const database = await firebase.firestore()
  database.settings(settings)
  return new Vuex.Store({
    state: {
      isLoggedIn: false,
      database
    },
    getters: {
      isLoggedIn: (state) => state.isLoggedIn
    },
    mutations: {
      login(state) {
        state.isLoggedIn = true
      }
    },
    actions: {
      async login({ commit }) {
        commit('login')
      }
    }
  })
}
export default createStore
