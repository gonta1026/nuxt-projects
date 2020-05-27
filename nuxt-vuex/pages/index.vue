<template>
  <div class="container">
    <Tutorial />
    <!-- <hr> -->
    <!-- <Todo /> -->
    <!-- <hr /> -->
    <Bookshop />
    <hr />
  </div>
</template>

<script>
import Tutorial from "~/components/Tutorial.vue";
import Bookshop from "~/components/BookShop.vue";
import Todo from "~/components/Todo.vue";
export default {
  components: {
    Tutorial,
    Bookshop,
    Todo
  }
};
</script>

<style>
ul li {
  list-style: none;
}

.container {
  margin: 100px auto;
  min-height: 100vh;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
