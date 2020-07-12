<template>
  <v-app id="inspire">
    <div>
      <ModalArea/>
    </div>
    <PageHeader />
    <v-content>
      <v-container
      >
        <!-- <div class="belongs">
          <p class="belongs__detail">あなたが所属しているグループです</p>
          <ul class="belongs__detail--list">
            <li v-for="group in belongsGroups" :key="group.id">
              <nuxt-link :to="{ name: `group-id`, params: { id: group.id }}">{{group.name}}</nuxt-link>
            </li>
          </ul>
        </div> -->
        <div class="belongs not">
          <p class="belongs__detail">あなたが所属していないグループです！ぜひ入ってみましょう！</p>
          <ul class="belongs__detail--list">
            {{notBelongsGroups}}
            <li v-for="group in notBelongsGroups" :key="group.id" @click="entryGroup(group.id, currentUser.id)">
              <a>{{group.name}}</a>
            </li>
          </ul>
        </div>
        <!-- {{groups}} -->
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
    ...mapGetters("chat", ["orderdGroups", "currentUser"]),
    // belongsGroups(){
    //   return this.orderdGroups.filter( group => group.userIds.filter( userId => userId === this.currentUser.id))
    // },
    // notBelongsGroups(){//!!filterがうまくできなかったためgroupsのdataを使ってgroup一覧を表示した。
    //   return this.orderdGroups.forEach( group => group.userIds.filter( userId => userId !== this.currentUser.id))
    // }
    notBelongsGroups(){
      return this.orderdGroups.forEach((group)=> {
        if (!group.userIds.includes(this.currentUser.id )){
          console.log(group.name + "には"　+ this.currentUser.id + "含まれていない");
          // this.groups.push(group)
          return group
        }
        // return group.userIds.includes((userId) => {
        //   if (userId !== this.currentUser.id){
        //     console.log(group.name)
        //     console.log(userId)
        //     console.log(this.currentUser.id)
        //     this.groups.push(group);
        //   }
        // })
      })
      // return this.orderdGroups.filter( group => group.userIds.filter( userId => userId !== this.currentUser.id))
    }
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