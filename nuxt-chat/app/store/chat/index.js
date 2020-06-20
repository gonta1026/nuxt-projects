// 読み込み
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
// データベースの定義
const db = firebase.firestore();
const usersRef = db.collection('users');
const groupsRef = db.collection('groups');
// var user = firebase.auth().currentUser;
// stateを定義
export const state = () => ({
  groups: [],
  users: [],
  currentUser: {
    // name: "",
    email: ""
  },
  modalActive: {
    modalShow: false,
    groupNewShow: false,
    currentUserShow: false,
    otherUserShow: false,
  },
})

export const getters = {
  currentUser: state => {
    return state.currentUser;
  },
  modalActive: state => {
    return state.modalActive;
  },
  orderdGroups: state => _.sortBy(state.groups, 'created')
};

export const mutations = {
  setCurrentUser(state, user) {
    // state.currentUser.name = user.displayName
    state.currentUser.email = user.email
    // state.currentUser = user
  },
  modalClose(state) {
    console.log(state);
    state.modalActive.modalShow = state.modalActive.groupNewShow =　state.modalActive.currentUserShow = state.modalActive.otherUserShow = false
  },
  OpenModalContents(state, content) {
    state.modalActive.modalShow = true;
    state.modalActive[content] = true;
  }
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', usersRef)// stateのtodoと関連付けさせる
    bindFirestoreRef('groups', groupsRef) // stateのtodoと関連付けさせる
  }),
  signUp: firestoreAction((_, user) => {
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
  async login({commit}, user){
    const result = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    commit('setCurrentUser', result.user)
  },
  async logout() {
    await firebase.auth().signOut()
  },
  setCurrentUser({commit}, user){
    commit("setCurrentUser", user)
  },
  addGroup: firestoreAction((_, group) => {
    groupsRef.add({
      name: group.name,
      description: group.description,
      userId: 1,
      created: firebase.firestore.FieldValue.serverTimestamp()
    })
  }),
}