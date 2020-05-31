// 読み込み
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

// データベースの定義
const db = firebase.firestore()
const usersRef = db.collection('users')

// stateを定義
export const state = () => ({
  users: []
})

export const getters = {
  users: state => state.users
}

export const mutations = {
//   updateUsersName(state, name) {
//     state.name = name  
//   },
  add(state, name) {
    state.name = "";
    this.dispatch('users/add', name)
  },
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', usersRef)
  }),
  add: firestoreAction((_, name) => {
    if(name.trim()) {
      usersRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((_, id) => {
    usersRef.doc(id).delete()
  }),
  toggle: firestoreAction((_, todo) => {
    usersRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}
