<template>
  <vs-row vs-w="12" class="mypage">
    <vs-col vs-type="flex" vs-justify="center" vs-align="flex-start" vs-lg="3" vs-sm="3" vs-xs="12" >
      <vs-card style="text-align: center;padding-bottom: 32px;">
        <div v-if="user">
          <vs-avatar /><br>
          <span>{{user.email}}</span>
        </div>
      </vs-card>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="1" vs-xs="12" />
    <vs-col vs-type="flex" vs-justify="center" style="flex-direction: column" vs-direction="column" vs-align="center" vs-lg="8" vs-sm="8" vs-xs="12">
      <router-link class="link" style="margin-bottom: 32px;flex: 1;width: 100%;display: block;" :to="`/posts/${post.id}`" v-for="post in posts" :key="post.id">
        <vs-card>
          <div slot="header">
            <h3>
              {{post.title}}
            </h3>
          </div>
          <div>
            <span>{{post.body}}</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <FavoriteButton :isLiked="false" />
            </vs-row>
          </div>
        </vs-card>
      </router-link>
    </vs-col>
  </vs-row>
</template>

<script>
import FavoriteButton from '../components/FavoriteButton.vue'

export default {
  components: {
    FavoriteButton
  },
  data() {
    const user = this.$firebase.auth().currentUser
    return {
      user,
      posts: []
    }
  },
  created() {
    this.$store.state.database.collection('posts').where('userId', '==', `${this.user.uid}`).get()
    .then((querySnapshot) => {
      const list = []
      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data()
        })
      })
      this.posts = list
    })
  }
}
</script>

<style>
.mypage .vs-sidebar-background {
  display: none;
}
</style>
