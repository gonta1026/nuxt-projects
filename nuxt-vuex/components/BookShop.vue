<template>
  <div>
    <h1>BookShopコンポーネントだよ！</h1>
    <hr />
    <ul>
      <li v-for="(book, i) in books" :key="i">{{book.title}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="(book, i) in targetAuthorBooks" :key="i">{{book.title}}</li>
    </ul>
    <hr />
    <form class="form">
      <div class="column title">
        <label>タイトルで検索する</label>
        <input type="text" @input="serchForTitle({value: $event.target.value, cheackForm: cheackTitle})" />
      </div>
      <div class="column price">
        <label for>指定金額以下で検索する</label>
        <input type="number" />
      </div>
      <div class="column author">
        <label for>指定した著者名で検索する</label>
        <input type="number" />
      </div>
    </form>
    <ul v-if="serchBooks.length">
      <li v-for="(book, i) in serchBooks" :key="i">
        <p>{{book.title}}</p>
        <p>{{book.price}}</p>
        <p>{{book.quantity}}</p>
        <p>{{book.author}}</p>
      </li>
      <li></li>
    </ul>
    <ul v-else>
      <li>{{noBookMessage}}</li>
    </ul>
    <h1>トータルの本の数は{{totalBooks}}</h1>
    <hr />
    <h1>2000円以下の本は{{cheapBooks}}本あるよ</h1>
    <hr />
    <h1>全ての本を表示</h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("modules/bookshop", [
      "books",
      "totalBooks",
      "cheapBooks",
      "targetAuthorBooks",
      "serchBooks",
      "noBookMessage"
    ])
  },
  methods: {
    ...mapMutations("modules/bookshop", ["serchForTitle"]),
    cheackTitle(state, book, value){ 
      if (book.title.indexOf(value) === 0 && value) {
        return state.serchBooks.push(book);
      }
    },
  }
};
</script>

<style scoped>
.form {
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
</style>