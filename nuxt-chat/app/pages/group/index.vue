<template>
  <v-app id="inspire">
    <div>
      <ModalArea/>
    </div>
    <PageHeader />
    <v-content>
      <v-container
      >
        <div class="belongs not">
          <p class="belongs__detail">あなたが所属していないグループです！ぜひ入ってみましょう！</p>
          <ul class="belongs__detail--list">
            <li v-for="group in notBelongsGroups" :key="group.id" @click="entryGroup(group.id, currentUser.id)">
              <a>{{group.name}}</a>
            </li>
          </ul>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
  head: {
    bodyAttrs: {
      class: 'group'
    },
    title: "group-top"
  },
  // name: "group",
  data: () => ({
    drawer: null,
    groups: []
  }),

  computed: {
    ...mapGetters("chat", ["orderdGroups", "currentUser", "notBelongsGroups"]),
  },

  methods: {
    entryGroup(groupId, currentUserId){
      this.$store.dispatch("chat/entryGroup", {groupId, currentUserId})
    }
  }

}
</script>

<style lang="scss" scoped>
body .v-application--wrap {
  min-height: auto;
}

.belongs {
  &__detail {
    p {
      margin: 0
    }
    &--list{
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      li {
        width: 18%; 
        text-align: center;
        &:not(:nth-of-type(5n + 1)){
          margin-left: 20px;
        }
        &:nth-of-type(n + 6){
          margin-top: 10px;
        }
        a {
          display: block;
          border: 1px solid #ddd;
          padding: 5px 10px;
          color: #000;
        }
      }
    }
  }
  &.not {
    margin-top: 40px;
  }
}

</style>