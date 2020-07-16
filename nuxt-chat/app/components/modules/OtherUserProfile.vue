<template>
  <v-col
    cols="12"
    sm="10"
    md="5"
    class="other-user-profile"
  >
  <v-card>
    <v-card-title 
      class="blue darken-2"
      >
      User profile（これから増やしたい）
    </v-card-title>
    <v-container>
      <v-row class="mx-2">
        <p>name: {{userProfile.name}}</p>
      </v-row>
    </v-container>

  </v-card>
  </v-col>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters("chat", ["currentGroup", "userProfile"])
  },
  
}
</script>

<style lang="scss" scoped>

.other-user-profile {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10;
}

</style>