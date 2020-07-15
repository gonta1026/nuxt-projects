
<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click="change"></v-app-bar-nav-icon>
    <v-toolbar-title class="toolbar">
      <h2 v-if="$route.name == 'group-id'">{{currentGroup.name| truncate(8,'...')}}</h2>
      <template v-if="$route.name == 'group-id' && targetGroup($route.params.id)">
        <button class="btn" v-if="notBelongsUsers($route.params.id).length" @click="OpenModalContents('isAddUserToGroup')">User Add</button>
      </template>
      <div class="right">
        <div class="logout" @click="logout">Logout</div>
        <div class="user">{{currentUser.name | truncate(5,'...')}}</div>
      </div>
      <!-- {{notBelongsUsers($route.params.id).length}} -->
      <!-- {{(notBelongsUsers('ICmvK38Vz9zaOgl6xwq0'))}} -->
    </v-toolbar-title>
    
  </v-app-bar>
</template>
<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  asyncData ({ params }) {
    return { page: params }
  },

  computed: {
    ...mapGetters("chat", ["currentUser", "currentGroup", "notBelongsUsers", "targetGroup"]),
    // ...mapMutations("chat", ["OpenModalContents"]),
  },

  methods: {
    logout(){
      try {
        this.$store.dispatch("chat/logout")
        this.$router.push('/login')
      }catch {
        console.log("ログアウトに失敗しました")
      }
    },
    change(){
      this.$emit("changeDrawer");
    },
    ...mapMutations("chat", ["OpenModalContents"])
  }
}
</script>

<style lang="scss" scoped>


header {
  height: 0;
  .toolbar {
    width: 100%;
    display: flex;
    .btn {
      margin-left: 15px;
    }
    .right {
      display: flex;
      min-width: 150px;
      margin: 0 0 0 auto;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: 750px) {
  header {
    .toolbar {
      padding: 0;
    }
  }
}


</style>