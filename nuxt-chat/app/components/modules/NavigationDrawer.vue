<template>
  <v-navigation-drawer
    v-model="propsDrawer"
    app
  >
    <v-list dense>
      <v-list-item link>
        <nuxt-link to="/group/new" class="header-link">
          <v-list-item-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>New Grssoup</v-list-item-title>
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
</template>
<script>
export default {
  props: {
    propsDrawer: Boolean
  }
}
</script>

<style lang="scss" scoped>

.header-link {
  display: flex;
}

</style>