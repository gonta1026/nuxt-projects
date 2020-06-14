
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
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch("chat/logout")
    },
    change(){
      this.$emit("changeDrawer");
    }
  }
}
</script>

<style lang="scss" scoped>

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