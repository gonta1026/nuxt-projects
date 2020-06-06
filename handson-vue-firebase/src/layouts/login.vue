<template>
  <div class="layout">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  created() {
    const u = this.$firebase.auth().currentUser
    if (u) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 960px;
  margin: 60px auto 0;
  padding: 16px;
}
</style>
