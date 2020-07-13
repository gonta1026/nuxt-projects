<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    class="drawer"
  >
    <v-list dense class="drawer__list">
      <v-list-item link class="drawer__list--link">
        <v-list-item-action class="header-link">
          <v-icon>mdi-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content @click="OpenModalContents('isGroupNewFrom')">
          <v-list-item-title>New Group</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link class="drawer__list--link">
        <v-list-item-content class="header-link">
          <nuxt-link to="/group">
            <v-list-item-title>Group Top</v-list-item-title>
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
      <template v-if="belongsGroups.length" class="belongs-list">
        <nuxt-link :to="{ name: `group-id`, params: { id: group.id }}" v-for="group in belongsGroups" :key="group.id" @click.native="setCurrentGroup(group)" class="group-list">
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
  created(){
    this.drawer = window.innerWidth >= 750 ? this.propsDrawer : false
  },
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
    ...mapGetters("chat", ["belongsGroups", "currentGroup"])
  },
  methods: {
    ...mapMutations("chat", ["OpenModalContents"]),
    setCurrentGroup(group){
      this.$store.commit("chat/setCurrentGroup", group);
    },
    // handleResize(){
    //   if (window.innerWidth <= 750) {
    //     this.drawer = false
    //   } else {
    //     this.drawer = this.propsDrawer
    //   }
    // }
  },
}
</script>

<style lang="scss" scoped>

.drawer {
  &__list {
    &--link {
      .header-link {
        display: flex;
        a {
          color: #000;
        }
      }        
    
    }
  }
}
.group-list.nuxt-link-active {
  display: block;
  background: #ddd;
}

</style>