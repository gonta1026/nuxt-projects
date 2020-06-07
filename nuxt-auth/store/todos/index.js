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
  orderdTodos: state => state.todos
}

export const mutations = {
  setUser(state, user) {
    state.user.userUid = user.uid
    state.user.userName = user.displayName
  },
  logout(state){
    state.user.userUid = ""
    state.user.userName = ""
  },
  logout(state){
    state.user.userUid = ""
    state.user.userName = ""
  },
  // setTodos(state, todos){
  //   state.todos = todos
  // }
}
export const actions = {
  // async initTodos({ commit }){
  //   firestoreAction(({ bindFirestoreRef }) => {
  //     bindFirestoreRef('todos', todosRef)
  //   })
  //   // const todos = [];
  //   // const result = await todosRef.get();
  //   // result.forEach((doc) => {
  //   //   todos.push(doc.data());
  //   // });
  //   // const sortTodo = _.sortBy(todos, "created");
  //   // commit('setTodos', sortTodo)
  // },
  initTodos: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
  }),
  async login({ commit }) {
    try {
      // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider)
      commit('setUser', result.user)
    } catch {
      const errorCode = error.code;
      console.log('error : ' + errorCode)
    }
  },
  logout({commit}) {
    firebase.auth().signOut();
    commit("logout");
  },
  initUser({commit}, user) {
    commit('setUser', user);
  },
  addTodo: firestoreAction((_, todo) => {
    todosRef.add({
      todo: todo.todo,
      limit: todo.limit,
      userUid: todo.userUid,
      userName: todo.userName,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  removeTodo: firestoreAction((_, id) => {
    todosRef.doc(id).delete()
  }),
}
