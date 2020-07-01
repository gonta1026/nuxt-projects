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
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Signup form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="signUp(user)">
                  <v-text-field
                    ref="name"
                    label="Name"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="user.name"
                  ></v-text-field>
                  
                  <v-text-field
                    label="Email"
                    name="email"
                    color="teal darken-2"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="user.email"
                  ></v-text-field>

                  <v-row>
                    <input @change="selectedFile" type="file" name="file">
                  </v-row>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="user.password"
                  ></v-text-field>
                  <v-btn type="submit" color="primary">Sign up</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import firebase from '~/plugins/firebase'
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'

export default {
  head: {
    bodyAttrs: {
      class: 'signup'
    }
  },
  data: () => ({
    user: {
      name: "",
      email: "",
      avator: "",
      password: "",
    }
  }),
  mounted () {
    this.$refs.name.focus();
  },
  computed: {
    ...mapState("chat", ["users"])
  },
  methods: {
    selectedFile(e) {
      e.preventDefault();
      let files = e.target.files;
      this.user.avator = files[0];
    },
    
    signUp(user){
      try {
        const {name, email, avator, password} = user;
        this.$store.dispatch('chat/signUp', {name, email, avator, password})
        this.user.name = this.user.email = this.user.avator = this.user.password = '';
        this.$router.push('/login')
      } catch {
        console.log("新規登録に失敗しました！");
      }
    },
  }
}
</script>