import firebase from "~/plugins/firebase";
export default ({ req, route, redirect, store }) => {
  
  const user = store.state.chat.currentUser.email;
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    // if (user && route.path === "/login/" || user && route.path === "/signup/") {
    //   return redirect("/group/");
    // }

    // /* ログインしていないのに "ログインと新規登録" 以外のページに行ったらloginページに戻す*/
    // if (!user && route.path !== "/login/" || !user && route.path !== "/signup/") {
    //   return redirect("/login/");
    // }
  });

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