<template>
  <div class="container">
    <ul class="todos">
      <li v-for="todo in orderdTodos" :key="todo.id">
        <span v-if="todo.created">
          <input
          type="checkbox"
          :checked="todo.done"
          @input="toggle(todo)">
          <span v-bind:class="{ done: todo.done }">
            {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>
          <button v-on:click="remove(todo.id)">X</button>
        </span>
      </li>
    </ul>
    <div class="form">
      <form v-on:submit.prevent="add(name)">
        <input 
        :value="name"
        @input="updateTodosName($event.target.value)">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>



<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
  import moment from 'moment'
  export default {
    created: function() {
      this.$store.dispatch('todos/init')
    },
    computed: {
      ...mapState('todos',[
        "name",
      ]),
      ...mapGetters('todos',["orderdTodos"])
    },
    methods: {
      ...mapMutations('todos', ["updateTodosName", "add"]),
      ...mapActions('todos', [ "remove", "toggle"]),
    },
    filters: {
      dateFilter: function(date) {
        return moment(date).format('YYYY/MM/DD HH:mm:ss')
      }
    }
  }
</script>

<style>

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.todos {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li > span > span.done {
  text-decoration: line-through;
}
</style>
