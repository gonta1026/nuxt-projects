<template>
  <div>
    <vs-row vs-w="12" class="mypage" v-if="post">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="1" vs-xs="12" />
      <vs-col vs-type="flex" vs-justify="center" style="flex-direction: column" vs-direction="column" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="12">
        <vs-card style="margin-bottom: 32px;">
          <div slot="header">
            <h3>
              {{post.title}}
            </h3>
          </div>
          <div>
            <span>
              {{post.body}}
            </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <FavoriteButton :isLiked="isLiked" @click="like" />
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="1" vs-xs="12" />
    </vs-row>
  </div>
</template>

<script>
import FavoriteButton from '../../components/FavoriteButton.vue'

export default {
  components: {
    FavoriteButton
  },
  data() {
    return {
      post: null,
      isLiked: false
    }
  },
  created() {
    this.fetchPost(this.$route.params.id)
  },
  methods: {
    like() {
      this.isLiked = true
    },
    fetchPost(id) {
      this.$store.state.database.collection('posts').doc(id).get()
      .then((doc) => this.post = doc.data())
    }
  }
}
</script>

<style scoped>
.mypage .vs-sidebar-background {
  display: none;
}
</style>
