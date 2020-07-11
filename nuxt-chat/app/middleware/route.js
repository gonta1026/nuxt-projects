
import firebase from "~/plugins/firebase";
export default ({ req, route, redirect, store }) => {
  firebase.auth().onAuthStateChanged(function (user) {
    const path = route.path;
    console.log(path)
    console.log(user)
    // console.log(store.state.chat.currentUser.id)
    if (user) {
      
      if (path.match(/login/) || path.match(/signup/) || path === "/") {
        console.log("グループへ")
        redirect("/group");
      } 
    } else {
      if (!(path.match(/login/) || path.match(/signup/)) || path==="/") {
        console.log("ログインへ")
        redirect("/login");
      }
    }
    // if (!user){
    //   if (route.path !== "login" || !user && route.path !== "signup"){
    //     redirect("/login");
    //   }
    // }
  });


  // //todo ここでリダイレクトの指示を出してもうまくリダイレクトされない？
  // /* ログインしているのに "/login" のパスを使ったらルートに戻す*/
  // if (currentUser && route.path === "/login") {
  //   return redirect("/");
  // }
  // if (!currentUser && route.path !== "/login") {
  //   return redirect("/login");
  // }
}

// import firebase from "~/plugins/firebase";
// import Cookies from "universal-cookie"
// const cookies = new Cookies();
// const loginState = cookies.get('login_now')
// console.log("ss",loginState)
// // const loginState = cookies.get('login_now') ? cookies.get('login_now') : null

// export default ({ req, route, redirect, store }) => {
  // firebase.auth().onAuthStateChanged(function (user) {
    // console.log(loginState)
    //!!　univarsalモードでonAuthStateChangedでログイン状態をみるとリロード時にuserがnullになってしまう。
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     console.log("ログイン！")
      //     if (route.name === "login" | route.name === "signup") redirect("/group")
      //   } else {
      //     console.log("ログインしていない！")
      //     console.log(route.name);
      //     if (route.name !== "login") redirect("/login")
      //   }
      // })

//       console.log(store.state.chat.currentUser.name)
//       if (store.state.chat.currentUser.name) {
//         console.log("ログイン！")
//         if (route.name === "login" | route.name === "signup") redirect("/group")
//       } else {
//         console.log("ログインしていない！")
//         console.log(route.name);
//         if (route.name !== "login") redirect("/login")
//       }
    
    // if (loginState){
    //   console.log("ログインしている",loginState)
    //     /* ログインしているのに "ログインと新規登録" に行ったらgroupページに戻す*/
    //   if (route.path === "/login/" || route.path === "/signup/" || route.path === "/") {
    //     // return redirect("/group/");//!!ここのコメントアウトを外すとエラーになる。
    //   }

    // } else {
    //   console.log("ログインしていない", loginState)
    //   /* ログインしていないのに "ログインと新規登録" 以外のページに行ったらloginページに戻す*/
    //   if (route.path !== "/login/" || route.path !== "/signup/") {
    //     return redirect("/login/"); //!!ここのコメントアウトを外すとエラーになる。
    //   }
    // }


  // //!! ここでリダイレクトの指示を出してもうまくリダイレクトされない？
  // /* ログインしているのに "/login" のパスを使ったらルートに戻す*/
  // if (currentUser && route.path === "/login") {
  //   return redirect("/");
  // }
  // if (!currentUser && route.path !== "/login") {
  //   return redirect("/login");
  // }