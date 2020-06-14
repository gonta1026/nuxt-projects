import firebase from 'firebase'
// パラメータの準備（今回はこれだけfirebaseで使う機能が増えるとまたパラメーターを増やす）
// var user = firebase.auth().currentUser;
// console.log(firebase.auth().currentUser);
const config = {
  apiKey: `AIzaSyBhPz3TNNIgGLRaR4zZuER-bGhOcbpp_VA`,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: `${process.env.FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: `71432983838`,
  appId: `1:71432983838:web:f9190395b44ed3cfdc650f`
};

// 2重に初期化が行われないようにする
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

export default firebase