import firebase from '~/plugins/firebase'
const db = firebase.firestore();
const todoRef = db.collection('todos');

export const state = () => ({
  user: {
    userUid: '',
    userName: ''
  },
  todos: [],
})

export const getters = {
  loginUser: state => state.user,
  getTodos: state => state.todos
}

export const mutations = {
  setUser(state, user) {
    state.user.userUid = user.id 
    state.user.userName = user.displayName 
  },
  addTodo(state, todo) {
    state.todos.push(todo)
  }
}

export const actions = {
  login({ commit }) {
    console.log('login action')
    const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      const user = result.user;
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      commit('setUser', user.uid)
    }).catch(function (error) {
      var errorCode = error.code;
      console.log('error : ' + errorCode)
    });
  },
  initTodos({commit}, user) {
    todoRef.get()
    .then(res => {
      res.forEach((doc) => {
        console.log('success : ' + `${doc.id} => ${doc.data()}`);
        commit('addTodo', doc.data())
      })
    })
    .catch(error => {
      console.log('error : ' + error)
    })
  },
  initUser({commit}, user){
    commit('setUser', user);
  },
  addTodo({commit}, todo) {
    todoRef.add({
      todo: todo.todo,
      limit: todo.limit,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      commit('addTodo', todo)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
}