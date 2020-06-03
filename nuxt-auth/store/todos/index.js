import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore();
const todosRef = db.collection('todos');

export const state = () => ({
  user: {
    userUid: '',
    userName: ''
  },
  todos: [],
})

export const getters = {
  loginUser: state => state.user,
  orderdTodos: state => _.sortBy(state.todos, "created")
}

export const mutations = {
  setUser(state, user) {
    state.user.userUid = user.uid
    state.user.userName = user.displayName
    console.log
  },
  logout(state){
    state.user.userUid = ""
    state.user.userName = ""
  }
}

export const actions = {
  initTodos: firestoreAction(({ bindFirestoreRef }) => {
  　bindFirestoreRef('todos', todosRef)
  }),
  login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      const user = result.user;
        commit('setUser', user)
      }).catch(function (error) {
        const errorCode = error.code;
        console.log('error : ' + errorCode)
      });
  },
  logout({commit}) {
    firebase.auth().signOut();
    commit("logout");
  },
  initUser({commit}, user) {
    commit('setUser', user);
  },
  addTodo: firestoreAction((_, todo) => {
    console.log(todo)
    todosRef.add({
      todo: todo.todo,
      limit: todo.limit,
      userUid: todo.userUid,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  removeTodo: firestoreAction((_, id) => {
    todosRef.doc(id).delete()
  }),
}
