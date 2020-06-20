<template>
  <v-col
    cols="12"
    sm="10"
    md="5"
    class="other-user-profile"
  >
  <v-card>
    <v-card-title 
      class="blue darken-2"
      >
      User profile（一般ユーザーの簡単なプロフィール）
    </v-card-title>
    <v-container>
      <v-row class="mx-2">
        <v-col
          class="align-center justify-space-between"
          cols="12"
        >
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
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="dialog = false"
      >Save</v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style lang="scss" scoped>

.other-user-profile {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10;
}

</style>