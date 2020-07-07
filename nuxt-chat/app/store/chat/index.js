
import uuid from 'uuid'
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
import 'firebase/storage'

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
  currentUser: state => state.currentUser,

  modalActive: state => state.modalActive,

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
      const uploadTask = await firestorage.ref('fuga/' + fileName).put(user.avator);
      const url = await uploadTask.ref.getDownloadURL();
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      usersRef.add({
        name: user.name,
        email: user.email,
        avator: url,
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    } catch {
      console.log("新規登録に失敗しました！");
    }
  },

  async login(context, user){
    const result = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    const currentUser = _.find(context.state.users, user => user.email === result.user.email)
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

  addMessage: firestoreAction(({state}, {message, pass}) => {
    const messages = db.collection('groups').doc(pass).collection("messages");
    messages.add({
      message: message,
      created: firebase.firestore.FieldValue.serverTimestamp(),
      user: {
        id: state.currentUser.id,
        name: state.currentUser.name
      }
    })
  }),
  addGroup: firestoreAction(({state}, group) => {
    groupsRef.add({
      name: group.name,
      description: group.description,
      // userId: state.currentUser.id,
      userId: [state.currentUser.id],
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
  async updateUserProfile(context, avator){
    const fileName = uuid();
    const uploadTask = await firestorage.ref('images/' + fileName).put(avator);
    const url = await uploadTask.ref.getDownloadURL();
  },
}
