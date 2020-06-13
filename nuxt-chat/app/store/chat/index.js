// 読み込み
import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

// データベースの定義
const db = firebase.firestore()
const todosRef = db.collection('users')

// stateを定義
export const state = () => ({
  users: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', usersRef)// stateのtodoと関連付けさせる
  })
}