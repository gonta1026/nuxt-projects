import firebase from "~/plugins/firebase";
import Cookies from "universal-cookie"
const cookies = new Cookies();
const loginState = cookies.get('login_now')
// console.log("ss",loginState)
// const loginState = cookies.get('login_now') ? cookies.get('login_now') : null
export default ({ req, route, redirect, store }) => {
  // firebase.auth().onAuthStateChanged(function (user) {
    // console.log(loginState)
    if (loginState){
        /* ログインしているのに "ログインと新規登録" に行ったらgroupページに戻す*/
      if (route.path === "/login/" || route.path === "/signup/") {
        return redirect("/group/");
      }
      console.log("ログインしている",loginState)
    } else {
      console.log("ログインしていない", loginState)
      //!!ここのコメントアウトを外すとエラーになる。
      /* ログインしていないのに "ログインと新規登録" 以外のページに行ったらloginページに戻す*/
      if (route.path !== "/login/" || route.path !== "/signup/") {
        // return redirect("/login/");
      }
    }
    if (route.path === "/") {
      return redirect('/group/')
    }

  // //!! ここでリダイレクトの指示を出してもうまくリダイレクトされない？
  // /* ログインしているのに "/login" のパスを使ったらルートに戻す*/
  // if (currentUser && route.path === "/login") {
  //   return redirect("/");
  // }
  // if (!currentUser && route.path !== "/login") {
  //   return redirect("/login");
  // }
}