<template>
  <div class="container">
    <div class="title is-1 is-spaced" v-if="loginUser.userName">
      <p>user: {{ loginUser.userName }}</p>
    </div>
    <button class="button is-primary is-rounded" @click="login">
      googleアカウントでログイン
    </button>
    <button class="button is-primary is-rounded" @click="logout">
      googleアカウントをログアウト
    </button>
    <p>emailとpasswordでログインする。</p>
    <input type="email" namm="email" v-model="email">
    <input type="password" namm="password" v-model="password">
    <button @click"signup"></button>
    <table class="table is-narrow" v-if="orderdTodos.length">
      <tbody>
        <tr>
          <th>todo</th>
          <th>limit</th>
          <th>ユーザー名</th>
          <th>作成時間</th>
          <th>削除ボタン</th>
        </tr>
      </tbody>
      <tbody>
        <tr v-for="todo in orderdTodos" :key="todo.id">
          <td>{{todo.todo}}</td>
          <td>{{todo.limit}}</td>
          <td v-if="todo.userName">{{ todo.userName }}</td>
          <td v-if="todo.created">{{ todo.created.toDate() | dateFilter}}</td>
          <td @click="removeTodo(todo.id)">削除</td>
        </tr>
      </tbody>
    </table>
    <div class="field is-grouped" v-if="loginUser.userName">
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
import moment from "moment";
export default {
  data: () => ({
    todo: {
      newTodo: '',
      newLimit: ''
    },
    email: "",
    password: ""
  }),
  //todosメモ　できればasyncDataを使って初期表示も早くしたいがfirestoreActionを使ってバインドしている場合は使えないと思われる。
  created() {
    // if (this.todos){
      this.$store.dispatch('todos/initTodos');    
      firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          // ログインしたときに実行するメソッド
          this.$store.dispatch('todos/initUser', user);
        }
      })
    // }
  },
  computed: {
    ...mapGetters("todos", ["loginUser", "orderdTodos"]),  
  },
  methods: {
    ...mapActions("todos",["addTodo", "removeTodo", "logout"]),
    async login() {
      await this.$store.dispatch('todos/login')
    },
    addTodo() {
      const todo = this.todo.newTodo
      const limit = this.todo.newLimit
      const userUid = this.loginUser.userUid
      const userName = this.loginUser.userName
      this.$store.dispatch('todos/addTodo', {todo, limit, userUid, userName})
      this.todo.newLimit = this.todo.newTodo = '';
    }
  },
  filters: {
    dateFilter: date => moment(date).format('YYYY/MM/DD')
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

