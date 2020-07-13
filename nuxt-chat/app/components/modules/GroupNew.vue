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
    <v-form @submit.prevent="addGroup(group)">
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
              ref="name"
              v-model="group.name"
              placeholder="Name"
            ></v-text-field>
          </v-row>
          <div>
   　　　　  <v-col cols="12" sm="6">
             <v-select
              v-model="selectedPlan"
              item-text="label"
              item-value="value"
              :items="plans"
              label="旅行プラン"
              multiple
              >
              </v-select>
            </v-col>
          </div>
        </v-col>
        
        <v-col cols="12">
          <v-text-field
            v-model="group.description"
            prepend-icon="mdi-text"
            placeholder="Description"
          ></v-text-field>
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
  export default {
    data: () => ({
      group: {
        name: "",
        description: ""
      },
       // 最初はドイツを選択済にする
      selectedPlan: "",
      plans: [
        { label: 'ドイツ'   , value: 'germany'  },
        { label: 'スペイン' , value: 'spain'    },
        { label: 'フランス' , value: 'france'   },
      ],
    }),
    
    mounted () {
      this.$refs.name.focus();
    },
    methods: {
      addGroup(group){
        const {name, description} = group;
        this.$store.dispatch("chat/addGroup", {name, description});
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
}

.user-list {
  width: 100%;
}

.v-menu__content {
}

</style>