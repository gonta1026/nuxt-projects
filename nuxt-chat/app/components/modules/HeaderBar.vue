
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="toolbar">
      <nuxt-link to="/group/">ChatApp</nuxt-link>
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
data: () => ({
    drawer: null,
  }),  
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