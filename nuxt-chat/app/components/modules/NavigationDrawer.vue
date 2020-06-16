<template>
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
            <v-list-item-title>New Grssoup</v-list-item-title>
          </v-list-item-content>
        </nuxt-link>
      </v-list-item>
      <nuxt-link to="/group/1">
        <v-list-item>
          <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>
    </v-list>
  </v-navigation-drawer>
  
</template>
<script>
export default {
  props: {
    propsDrawer: Boolean
  },
  data: function () {
    return { 
      drawer: this.propsDrawer
    }
  },
  watch: {
    propsDrawer: function(){
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>

.header-link {
  display: flex;
}

</style>