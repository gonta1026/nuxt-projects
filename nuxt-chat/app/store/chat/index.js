
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

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
    
    email: ""
  },

  modalActive: {
    isMaskActive: false,
    isGroupNewFrom: false,
    isCurrentUserProfile: false,
    isOtherUserProfile: false,
  },
})

export const getters = {
  currentUser: state => {
    return state.currentUser;
  },

  modalActive: state => {
    return state.modalActive;
  },

  orderdGroups: state => _.sortBy(state.groups, 'created'),
  orderdMessages: state => _.sortBy(state.messages, 'created')
};

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser.id = user.id
    state.currentUser.name = user.name
    state.currentUser.email = user.email
  },

  modalClose(state) {
    state.modalActive.isModalMaskActive = state.modalActive.isMaskActive = state.modalActive.currentUserShow = state.modalActive.isOtherUserProfile = false
  },

  OpenModalContents(state, content) {
    state.modalActive.isModalMaskActive = true;
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

  signUp: firestoreAction(({commit}, user) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      usersRef.add({
        name: user.name,
        email: user.email,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    } catch {
      console.log("新規登録に失敗しました！");
    }
  }),
  async login(context, user){
    const result = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    const currentUser = _.find(context.state.users, (user) => user.email === result.user.email)
    context.commit('setCurrentUser', currentUser)

  },
  async logout() {
    await firebase.auth().signOut()
  },
  logout({commit}) {
    firebase.auth().signOut();
  },
  setCurrentUser({commit}, user){
    commit("setCurrentUser", user)
  },

  addMessage: firestoreAction((_, {message, pass}) => {
    const messages = db.collection('groups').doc(pass).collection("messages");
    messages.add({
      message: message,
      userId: 1,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  addGroup: firestoreAction((_, group) => {
    groupsRef.add({
      name: group.name,
      description: group.description,
      userId: 1,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
}