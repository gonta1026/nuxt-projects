<template>
  <header class="header">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <nuxt-link to="/group/new" class="header-link">
            <v-list-item-action>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>New Group</v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
  </header>
</template>

<script>
export default {
  props: {
    // source: String,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style lang="scss" scoped>

.header-link {
  display: flex;
}

.toolbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// .v-avatar {
//   float: right;
// }

</style>