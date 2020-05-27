<template>
  <div class="tutorial">
    <h1>初期値は{{count}}</h1>
    <h1>２倍の数は{{dobleCount}}</h1>
    <h1>３倍の数は{{tripleCount}}</h1>
    <button @click="increment({num01: 2, num02: 3})">＋ボタン</button>
    <button @click="decrement(2)">ーボタン</button>
    <button @click="incrementAction({num01: 3, num02: 4})">Aボタン</button>
    <input type="text" @input="updateMessage" />
    <p>{{message}}</p>
    <input type="text" />
  </div>
</template>

<script>
import { mapGetters, mutations, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("modules/tutorial", [
      "count",
      "dobleCount",
      "tripleCount",
      "totolTodos",
      "message"
    ])
  },
  methods: {
    ...mapMutations("modules/tutorial", [
      "increment",
      "decrement",
      "updateMessage"
    ]),
    ...mapActions("modules/tutorial", ["incrementAction"])
    // incrementAction(){ /* アクションの実行 */
    //   this.$store.dispatch("incrementAction")
    // },
    // updateMessage(e) {
    //   this.$store.dispatch("updateMessage", e.target.value)
    // },
    // ,increment(){
    //   this.$store.commit("increment")
    // },
    // decrement(){
    //   this.$store.commit("decrement")
    // },
  }
};
</script>