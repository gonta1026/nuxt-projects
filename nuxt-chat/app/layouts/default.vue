<template>
  <v-app dark>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  created() {
  // if (this.todos){
    this.$store.dispatch('chat/init');    
    // firebase.auth().onAuthStateChanged((user)=> {
    //   if (user) {
    //     // ログインしたときに実行するメソッド
    //     this.$store.dispatch('todos/initUser', user);
    //   }
    // })
    // }
  }
}
</script>
