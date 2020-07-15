<template>
  <v-col
    cols="12"
    sm="10"
    md="5"
    class="group-new"
  >
  <v-card>
    <v-card-title 
      class="blue darken-2"
      >
      Add User To Group
    </v-card-title>
    <v-form @submit.prevent="addUserToGroup(selectedUsers, $route.params.id)" class="form">
      <v-row class="mx-2">
        <v-col
          class="align-center justify-space-between"
        >
          <v-row cols="12" class="form__users">
             <v-select
              ref="users"
              v-model="selectedUsers"
              item-text="name"
              item-value="id"
              label="users"
              :items="notBelongsUsers($route.params.id)"
              multiple
              >
              </v-select>
          </v-row>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="primary">Save</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData ({ params }) {
    return { page: params }
  },

  data: () => ({
      selectedUsers: ""
  }),

  mounted () {
    this.$refs.users.focus();
  },

  computed: {
    ...mapGetters("chat", ["notBelongsUsers"])
  },

  methods: {
    addUserToGroup(users, groupId){
      this.$store.dispatch("chat/addUserToGroup", {users, groupId});
      this.$store.commit("chat/modalClose");
    }
  }
}
</script>

<style lang="scss" scoped>

.group-new {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10;
  .form {
    &__description {
      width: 100%;
      margin: 0 auto;
    }

  }
}


</style>