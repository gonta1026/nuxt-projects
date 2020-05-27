import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const todosRef = db.collection('todos')//firebaseコレクションで定義したコレクションの呼び出し

export const state = () => ({
  todos: [],
  name: "",
  done: false
})

export const getters = {
  orderdTodos: state => _.sortBy(state.todos, 'created')
}

export const mutations = {
  updateTodosName(state, name) {
    state.name = name  
  },
  add(state, name) {
    state.name = "";
    this.dispatch('todos/addAction', name)
  },
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
  }),
  addAction: firestoreAction((_, name) => {
    if(name.trim()) {
      todosRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((_, id) => {
    todosRef.doc(id).delete()
  }),
  toggle: firestoreAction((_, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}

