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
            <v-row>
               <input @change="selectedFile" type="file" name="file">
            </v-row>
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
  export default {
    data: () => ({
      user: {
        name: "",
        avator: "",

      }
    }),

    methods: {
      selectedFile(e) {
          e.preventDefault();
          let files = e.target.files;
          this.user.avator = files[0];
          // console.log(this.user.avator.name)
          // console.log(this.user.avator.lastModified)
          // console.log(this.user.avator.lastModifiedDate)
          // console.log(this.user.avator.size)
          // console.log(this.user.avator.type)
      },

      updateUserProfile(user){
        console.log(user.avator)
        this.$store.dispatch("chat", 'updateUserProfile', user.avator)
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