<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="10"
            md="5"
          >
          <v-card>
            <v-card-title 
              class="blue darken-2"
              >
              Create contact
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
                color="primary"
              >Cancel</v-btn>
              <v-btn
                text
                @click="dialog = false"
              >Save</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: true,
      items: [
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .v-card__title {
    color: #fff;
    font-weight: normal;
  }

</style>