<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list dense>
      <v-list-item link>
        <v-list-item-action class="header-link">
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content @click="OpenModalContents('groupNewShow')">
          <v-list-item-title>New Grssoup</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-if="orderdGroups.length">
        <nuxt-link :to="{ name: `group-id`, params: { id: group.id }}" v-for="group in orderdGroups" :key="group.id">
          <v-list-item>
            <v-list-item-content>
                <v-list-item-title>{{group.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

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
  },
  computed: {
    ...mapGetters("chat", ["orderdGroups"])
  },
  methods: {
    ...mapMutations("chat", ["OpenModalContents"])
  }
}
</script>

<style lang="scss" scoped>

.header-link {
  display: flex;
}

</style>