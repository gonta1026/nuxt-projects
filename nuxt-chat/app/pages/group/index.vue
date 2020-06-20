<template>
  <v-app id="inspire">
    <div>
      <ModalArea/>
    </div>
    <PageHeader />
    <v-content>
      <v-container
      >
        <p>気になるグループがあれば是非入ってください！もしくは新しく作成しても良いかもしれません！</p>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import firebase from '~/plugins/firebase'
export default {
  head: {
    bodyAttrs: {
      class: 'group'
    }
  },
  // name: "group",
  data: () => ({
    drawer: null,
  }),
  created() {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        console.log("ログインしているよ！")
        this.$store.dispatch("chat/setCurrentUser", user);
      }
    })
  }
}
</script>

<style lang="scss" scoped>
body .v-application--wrap {
  min-height: auto;
}

</style>