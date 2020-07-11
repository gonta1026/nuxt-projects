
import uuid from 'uuid'
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
import 'firebase/storage'
import Cookies from "universal-cookie"
const cookies = new Cookies();
const firestorage = firebase.storage()

const db = firebase.firestore();
const usersRef = db.collection('users');
const groupsRef = db.collection('groups');
export const state = () => ({
  groups: [],
  users: [],
  messages: [],

  currentUser: {
    id: "",
    name: "",
    email: "",
    avator: ""
  },
  
  currentGroup: {
    id: "",
    name: "",
  },

  modalActive: {
    isMaskActive: false,
    isGroupNewFrom: false,
    isCurrentUserProfile: false,
    isOtherUserProfile: false,
  },
})

export const getters = {
  users: state => state.users,
  currentUser: state => state.currentUser,
  currentGroup: state => state.currentGroup,
  modalActive: state => state.modalActive,
  orderdGroups: state => _.sortBy(state.groups, 'created'),
  orderdMessages: state => _.sortBy(state.messages, 'created')
};

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser.id = user.id
    state.currentUser.name = user.name
    state.currentUser.email = user.email
    // state.currentUser.avator = user.avator
  },
  
  setCurrentUserAtReload(state, user) {
    state.currentUser.id = user.id
    state.currentUser.name = user.name
    state.currentUser.email = user.email
    // state.currentUser.avator = user.avator
  },
  
  unsetCurrentUser(state, user) {
    state.currentUser.id = ""
    state.currentUser.name = ""
    state.currentUser.email = ""
    // state.currentUser.avator = user.avator
  },

  setCurrentGroup(state, group){
    state.currentGroup.id = group.id
    state.currentGroup.name = group.name
  },

  modalClose(state) {
      state.modalActive.isMaskActive
    = state.modalActive.isGroupNewFrom
    = state.modalActive.isCurrentUserProfile
    = state.modalActive.isOtherUserProfile = false
  },

  OpenModalContents(state, content) {
    state.modalActive.isMaskActive = true;
    state.modalActive[content] = true;
  },
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', usersRef)
    bindFirestoreRef('groups', groupsRef)
  }),

  initMessages: firestoreAction(({ bindFirestoreRef }, pass) => {
    const messages = groupsRef.doc(pass).collection("messages");
    bindFirestoreRef('messages', messages)
  }), 

  async signUp({commit}, user){
    const fileName = uuid();
    try {
      // const uploadTask = await firestorage.ref('images/' + fileName).put(user.avator);
      // const url = await uploadTask.ref.getDownloadURL();
      const result = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      // console.log("結果は", result.user)
      usersRef.add({
        name: user.name,
        email: user.email,
        // avator: url,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
      commit('setCurrentUser', user)
    } catch {
      console.log("新規登録に失敗しました！");
      return false;
    }
  },

  async login({state, commit}, user){
    try {
      console.log(state.users);
      const result = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
      const currentUser = _.find(state.users, user => user.email === result.user.email)
      commit('setCurrentUser', currentUser)
    } catch {
      alert("ログインに失敗しました！");
    }
  },

  async logout({commit}) {
    await firebase.auth().signOut()
    commit('unsetCurrentUser')
    console.log("ログアウトした！")
  },

  async setCurrentUser({commit, state}) { //!!本来はstateのusersを使って情報を取得したかったがobserverとしてしか取得ができなかったので直接firebaseから取得した。
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth && state.currentUser.id === "") {
        usersRef.get().then((querySnapshot) => {
          querySnapshot.forEach((user) => {
            if (user.data().email === auth.email){
              const currentUser = {
                id: user.id,
                name: user.data().name,
                email: user.data().email,
                avator: user.data().avator
              }
              // console.log(currentUser)
              commit('setCurrentUser', currentUser);
              return
            }
          });
        });
      }
    })
  },


  addMessage({state}, {message, pass}){
    const messages = db.collection('groups').doc(pass).collection("messages");
    console.log(state.currentUser.id)
    console.log(state.currentUser.name)
    messages.add({
      message: message,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      user: {
        id: state.currentUser.id,
        name: state.currentUser.name
      }
    })
  },
  addGroup: firestoreAction(({state}, group) => {
    groupsRef.add({
      name: group.name,
      description: group.description,
      // userId: state.currentUser.id,
      userId: [state.currentUser.id],
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  async updateUserProfile(_, avator){
    const fileName = uuid();
    const uploadTask = await firestorage.ref('images/' + fileName).put(avator);
    const url = await uploadTask.ref.getDownloadURL();
  },
}
