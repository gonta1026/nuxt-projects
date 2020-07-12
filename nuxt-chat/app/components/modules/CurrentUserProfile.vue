<template>
  <v-col
    cols="12"
    sm="10"
    md="5"
    class="current-user-profile"
  >
  <v-card>
    <v-card-title 
      class="blue darken-2"
      >
      User profile
    </v-card-title>
    <v-container>
      <v-form @submit.prevent="updateUserProfile(user)">
        <v-row class="mx-2">
          <v-col
            class="align-center justify-space-between"
            cols="12"
          >
            <!-- <v-row>
               <input @change="selectedFile" type="file" name="file">
            </v-row> -->
            <v-row
              align="center"
              class="mr-0"
            >
              <v-avatar
                size="40px"
                class="mx-3"
              >
                <img
                  src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                  alt=""
                >
              </v-avatar>
              <v-text-field
                placeholder="Name"
              ></v-text-field>
            </v-row>
          </v-col>
          
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-text"
              placeholder="Description"
              :value="currentUser.name"
            ></v-text-field>
            
          </v-col>
        </v-row>
        <v-btn
          type="submit"
          text
        >Save</v-btn>
      </v-form>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
        <!-- @click="dialog = false" -->
    </v-card-actions>
  </v-card>
  </v-col>
</template>


<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      user: {
        name: "",
        // avator: "",
      }
    }),

    computed: {
      ...mapGetters("chat", ["currentUser"])
    },

    methods: {
      selectedFile(e) {
        e.preventDefault();
        const files = e.target.files;
        // this.user.avator = files[0];
      },

      updateUserProfile(user){
        this.$store.dispatch("chat/updateUserProfile", user.avator)
      }
    }
  }
</script>

<style lang="scss" scoped>

.current-user-profile {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10;
}

</style>