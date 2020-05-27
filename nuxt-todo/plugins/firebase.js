import firebase from 'firebase'

// パラメータの準備（今回はこれだけfirebaseで使う機能が増えるとまたパラメーターを増やす）
const config = {
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
}

// 2重に初期化が行われないようにする
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase