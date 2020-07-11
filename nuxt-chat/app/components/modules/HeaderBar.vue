
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click="change"></v-app-bar-nav-icon>
    <v-toolbar-title class="toolbar">
      <h2 v-if="$route.name == 'group-id'">{{currentGroup.name}}</h2>
      <!-- <template v-if="!currentUser">         
        <nuxt-link to="/signup/">新規登録</nuxt-link>
        <nuxt-link to="/login/">ログイン</nuxt-link>
      </template> -->
      <div class="right">
        <div class="logout" @click="logout">ログアウト</div>
        <div class="user">{{currentUser.name}}</div>
      </div>
        <!-- @click="OpenModalContents('isCurrentUserProfile')" -->
      <!-- <v-avatar v-if="currentUser">
        <img
          :src="currentUser.avator"
          alt=""
        >
      </v-avatar> -->
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
}

.toolbar {
  width: 100%;
  display: flex;
  .right {
    display: flex;
    width: 180px;
    margin: 0 0 0 auto;
    justify-content: space-between;
  }
  // justify-content: space-between;
  // align-items: center;
}

.v-avatar {
  // cursor: pointer;
}
</style>