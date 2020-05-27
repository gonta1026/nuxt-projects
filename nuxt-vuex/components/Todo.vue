<template>
  <div class="tutorial">
    <h1>{{title}}</h1>
    <p>トータルの{{totalTodos}}</p>
    <p></p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("modules/todo", ["title", "totalTodos"])
  },
  methods: {
    // mutations: {
    //   ...mapMutations("modules/todo", ["serchForTitle"])
    // }
  }
};
</script>