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

export const actions = {
  initUsers: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', usersRef)// stateのtodoと関連付けさせる
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
}