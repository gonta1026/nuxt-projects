
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click="change"></v-app-bar-nav-icon>
    <v-toolbar-title class="toolbar">
      <h2 v-if="$route.name == 'group-id'">{{currentGroup.name| truncate(8,'...')}}</h2>
      <div class="right">
        <div class="logout" @click="logout">Logout</div>
        <div class="user">{{currentUser.name | truncate(5,'...')}}</div>
      </div>
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters("chat", ["currentUser", "currentGroup"]),
  },

  methods: {
    logout(){
      try {
        this.$store.dispatch("chat/logout")
        this.$router.push('/login/')
      }catch {
        console.log("ログアウトに失敗しました")
      }
    },
    change(){
      this.$emit("changeDrawer");
    },
    ...mapMutations("chat", ["OpenModalContents"])
  }
}
</script>

<style lang="scss" scoped>


header {
  height: 0;
  .toolbar {
    width: 100%;
    display: flex;
    .right {
      display: flex;
      min-width: 260px;
      margin: 0 0 0 auto;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: 750px) {
  header {
    .toolbar {
      padding: 0;
    }
  }
}


</style>