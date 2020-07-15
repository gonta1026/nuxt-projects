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
      Create group
    </v-card-title>
    <v-form @submit.prevent="addGroup(group)" class="form">
      <v-row class="mx-2">
        <v-col
          class="align-center justify-space-between"
        >
          <v-row
            cols="12"
            align="center"
            class="form__name"
          >
            <v-text-field
              ref="name"
              v-model="group.name"
              placeholder="Name"
            ></v-text-field>
          </v-row>
          <v-row cols="12" class="form__users">
             <v-select
              v-model="group.selectedUsers"
              item-text="name"
              item-value="id"
              :items="addUserList"
              label="users"
              multiple
              >
              </v-select>
          </v-row>
        </v-col>
        <v-row class="form__description">
          <v-text-field
            v-model="group.description"
            placeholder="Description"
          ></v-text-field>
        </v-row>
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
    data: () => ({
      group: {
        name: "",
        description: "",
        // 最初はドイツを選択済にする
        selectedUsers: ""
      },

    }),
    
    mounted () {
      this.$refs.name.focus();
    },

    computed: {
      ...mapGetters("chat", ["addUserList"])
    },
    methods: {
      addGroup(group){
        const {name, description, selectedUsers} = group;
        // console.log(name)
        // console.log(description)
        // console.log(selectedUsers)
        // console.log(group);
        this.$store.dispatch("chat/addGroup", {name, description, selectedUsers});
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