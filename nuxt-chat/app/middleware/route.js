import firebase from "~/plugins/firebase";

export default ({ req, route, redirect }) => {
  const currentUser = firebase.auth().currentUser;
  if (['/'].includes(route.path)) {//ルートで来た際は処理をスキップ
    return redirect('/group')
  }
  //todo ここでリダイレクトの指示を出してもうまくリダイレクトされない。
  /* ログインしているのに "/login" のパスを使ったらルートに戻す*/
  // if (currentUser && route.path === "/login") {
  //   return redirect("/");
  // }
  // /* ログインしていないのに "/login" 以外のページに行ったらloginページに戻す*/
  // if (!currentUser && route.path !== "/login") {
  //   return redirect("/login");
  // }
}