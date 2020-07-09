
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click="change"></v-app-bar-nav-icon>
    <v-toolbar-title class="toolbar">
      <nuxt-link to="/group/">野球部</nuxt-link>
      <div class="logout" @click="logout">ログアウト</div>
      <nuxt-link to="/signup/">新規登録</nuxt-link>
      <nuxt-link to="/login/">ログイン</nuxt-link>
        {{currentUser.name}}
      <v-avatar @click="OpenModalContents('isCurrentUserProfile')">
        <img
          v-if="currentUser.avator"
          :src="currentUser.avator"
          alt="John"
        >
      </v-avatar>
    </v-toolbar-title>
  </v-app-bar>
</template>
<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters("chat", ["currentUser"]),
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
}

.toolbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-avatar {
  cursor: pointer;
}
</style>