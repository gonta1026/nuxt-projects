import firebase from "firebase";

// パラメータの準備（今回はこれだけ。firebaseで使う機能が増えるとまたパラメーターを増やす）
const config = {
  projectId: process.env.FIRE_BASE_PROJECT
}

// 2重に初期化が行われないようにする
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase