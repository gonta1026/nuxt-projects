<template>
  <div class="home">
    <form @submit.prevent="() => {}">
      <p>
        <vs-input class="inputx" vs-size="large" placeholder="メールアドレス" v-model="formData.email"/>
      </p>
      <p>
        <vs-input class="inputx" type="password" vs-size="large" placeholder="パスワード" v-model="formData.password"/>
      </p>
      <p style="text-align: right;">
        <vs-button color="primary" @click="login" vs-type="flat" type="button">Login</vs-button>
        <vs-button color="primary" @click="signup" vs-type="flat" type="button" style="margin-left: 16px;">Signup</vs-button>
      </p>
    </form>
  </div>
</template>

<script>

export default {
  name: 'home',
  layout: 'login',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$firebase
          .auth()
          .signInWithEmailAndPassword(
            this.formData.email,
            this.formData.password
          )
        await this.$store.dispatch('login')
        this.$vs.notify({
          title: 'ログイン成功',
          text: 'ログインに成功しました'
        })
        this.$router.push('/mypage')
      } catch (e) {
        this.$vs.notify({
          title: 'ログイン失敗',
          text: 'メールアドレスやパスワードが違います',
          color: 'danger'
        })
      }
    },
    async signup() {
      try {
        const result = await this.$firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.formData.email,
            this.formData.password
          )
        await this.login()
      } catch (e) {
        console.log(e)
        this.$vs.notify({
          title: '登録失敗',
          text: '入力データに誤りがあります。',
          color: 'danger'
        })
      } finally {
      }
    }
  }
}
</script>

<style scoped>
.inputx {
  width: 360px;
}
</style>
