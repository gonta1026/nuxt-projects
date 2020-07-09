import firebase from "~/plugins/firebase";
import Cookies from "universal-cookie"
const cookies = new Cookies();
const loginState = cookies.get('loginNow') ? cookies.get('loginNow') : null
export default ({ req, route, redirect, store }) => {
  // firebase.auth().onAuthStateChanged(function (user) {
    console.log(loginState)
    if (loginState){
        /* ログインしているのに "ログインと新規登録" に行ったらloginページに戻す*/
      if (route.path === "/login/" || route.path === "/signup/") {
        // return redirect("/group/");
      } else {
        /* ログインしていないのに "ログインと新規登録" 以外のページに行ったらloginページに戻す*/
        // if (route.path !== "/login/" || route.path !== "/signup/") {
        //   return redirect("/login/");
        // }
      }
    }

  if (['/'].includes(route.path)) {//ルートで来た際は処理をスキップ
    return redirect('/group/')
  }

  // //todo ここでリダイレクトの指示を出してもうまくリダイレクトされない？
  // /* ログインしているのに "/login" のパスを使ったらルートに戻す*/
  // if (currentUser && route.path === "/login") {
  //   return redirect("/");
  // }
  // if (!currentUser && route.path !== "/login") {
  //   return redirect("/login");
  // }
}