
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click.stop="change"></v-app-bar-nav-icon>
    <v-toolbar-title class="toolbar">
      <nuxt-link to="/group/">野球部</nuxt-link>
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