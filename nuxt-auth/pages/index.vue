<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ $store.getters.getUserName }}</p>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>

    <table class="table is-narrow">
      <tbody>
        <tr>
          <th>todo</th>
          <th>limit</th>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.id">
          <td>{{todo.todo}}</td>
          <td>{{todo.limit}}</td>
        </tr>
      </tbody>
    </table>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input v-model="newTodo" class="input" type="text" placeholder="todo">
      </p>
      <p class="control is-expanded">
        <input v-model="newLimit" class="input" type="text" placeholder="limit">
      </p>
      <p class="control">
        <a class="button is-primary" @click="addTodo">
          add
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      newTodo: '',
      newLimit: ''
    }
  },
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
    addTodo() {
      const todo = this.newTodo
      const limit = this.newLimit
      this.$store.dispatch('addTodo', {todo, limit})
      this.newTodo = ''
      this.newLimit = ''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      console.log(user)
      // ログインしたときに実行するメソッド
      this.$store.dispatch('init', user)
      // this.setUser(user)
    }
  })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>