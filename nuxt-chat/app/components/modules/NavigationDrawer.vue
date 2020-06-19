<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list dense>
      <v-list-item link>
        <!-- <nuxt-link @click="modalActive = !modalActive"> -->
          <v-list-item-action class="header-link">
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content @click="modalChange(true)">
            <v-list-item-title>New Grssoup</v-list-item-title>
          </v-list-item-content>
        <!-- </nuxt-link> -->
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

import { mapState, mapMutations } from 'vuex'


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
    ...mapState("chat", ["modalActive"]),
  },
  methods: {
    ...mapMutations("chat", ["modalChange"])
  }
}
</script>

<style lang="scss" scoped>

.header-link {
  display: flex;
}

</style>