<template>
  <v-app dark>
    <nuxt />
  </v-app>
</template>

<script>

import firebase from '~/plugins/firebase'
import { mapGetters } from 'vuex'

export default {
  name: "default",

  computed: {
    ...mapGetters("chat", ["users"])
  },
  created() {
  // if (this.todos){
    this.$store.dispatch('chat/init');    
    this.$store.dispatch('chat/setCurrentUser')    
    // }
  }
}
</script>
