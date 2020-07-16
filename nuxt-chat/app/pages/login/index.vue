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
          <p>まだバリデーションは対応しておりません💦</p>
          <p>email: test001@gmail.com</p>
          <p>password: test-001</p>
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login(user)">
　　　　　　　　　　　<v-text-field
                    ref="email"
                    label="Email"
                    name="email"
                    color="teal darken-2"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="user.email"
                  ></v-text-field>
                  
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="user.password"
                  ></v-text-field>
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-form>
                <!-- <nuxt-link to="/group/">グループにとぶ</nuxt-link> -->
                <nuxt-link to="/signup">新規登録のページはこちらです。</nuxt-link>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import firebase from '~/plugins/firebase'
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'

export default {

  head: {    
    // nuxt.config.jsの%sに反映される内容
    title: 'タイトルタグのテストページ',
    bodyAttrs: {
      class: 'login'
    },
    title: "login"
  },
  data: () => ({
    user: {
      email: "",
      password: "",
    }
  }),

  mounted () {
    this.$refs.email.focus();
  },

  computed: {
  },

  methods: {
    login(user){
      const {email, password} = user;
      try {
        this.$store.dispatch('chat/login', {email, password})
        this.user.email = this.user.password = '';
        // this.$router.push('/group')
      } catch {
        alert("失敗！")
        console.log("ログインに失敗しました！")
      }
    }
  }
}
</script>