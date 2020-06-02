<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ loginUser.userName }}</p>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>

    <table class="table is-narrow">
      <tbody>
        <tr>
          <th>id</th>
          <th>todo</th>
          <th>limit</th>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.id">
          <td>{{todo.id}}</td>
          <td>{{todo.todo}}</td>
          <td>{{todo.limit}}</td>
        </tr>
      </tbody>
    </table>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input v-model="todo.newTodo" class="input" type="text" placeholder="todo">
      </p>
      <p class="control is-expanded">
        <input v-model="todo.newLimit" class="input" type="text" placeholder="limit">
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
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'

export default {
  data: () => ({
    todo: {
      newTodo: '',
      newLimit: ''
    }
  }),
  computed: {
    ...mapGetters(["loginUser"]),  
  },
  methods: {
    ...mapActions(["addTodo"]),
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
    addTodo() {
      const todo = this.todo.newTodo
      const limit = this.todo.newLimit
      this.$store.dispatch('addTodo', {todo, limit})
      this.todo.newLimit = this.todo.newTodo = '';
    }
  },
  created() {
    this.$store.dispatch('initTodos');
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        // ログインしたときに実行するメソッド
        this.$store.dispatch('initUser', user);
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