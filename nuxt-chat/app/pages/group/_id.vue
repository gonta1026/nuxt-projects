<template>
  <div>
    <div>
      <ModalArea/>
    </div>
    <PageHeader />
    <v-content>
      <v-container
      >
        <ul class="message-list">
          <li v-for="message in orderdMessages" :key="message.id" class="message-list__message">
            <v-avatar @click="OpenModalContents('otherUserShow')" class="message-list__message--image">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
            <div class="content">
              <div class="content__name">Josh</div>
              <div class="content__detail">{{message.message}}</div>
            </div>            
          </li>
          <li class="message-list__message own">
            <div class="content">
              <div class="content__name">Josh</div>
              <div class="content__detail">僕は今日は野球がしたいんだなーーーーーーーーーーーーーーーーーーーーーーー</div>
            </div>            
          </li>
        </ul>
      </v-container>
      <form @submit.prevent="addMessage({message, pass: $route.params.id})" class="new-message">
        <input type="text"
          v-model="message"
          class="new-message__input"
          placeholder="message">
        <div class="new-message__btns">
          <v-icon>fas fa-reply</v-icon>
          <v-icon>fa-image</v-icon>
        </div>
      </form>
    </v-content>
  </div>
</template>

<script>

import {mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  head: {
    bodyAttrs: {
      class: 'group-show'
    }
  },
  created(){
    this.$store.dispatch("chat/initMessages", this.$route.params.id)
  },
  data: () => ({
    message: "",
  }),
  computed: {
    ...mapGetters("chat", ["orderdMessages"])
    },
  methods: {
    ...mapMutations("chat", ["OpenModalContents"]),
    addMessage(messageAndPass){
      this.$store.dispatch("chat/addMessage", messageAndPass);
      this.message = "";
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 160px);
  overflow: hidden;
  overflow-y: scroll;
}
.message-list {
  padding-left: 0;
  &__message {
    &.own {
      margin: 0 0 0 auto;
    }
    display: flex;
    width: 55%;
    &:nth-of-type(n + 2){
      margin-top: 20px;
    }
    .content {
      margin-left: 10px;
      &__name {
        
        }
      &__detail {
        border: 1px solid #000;
        border-radius: 10px;
        padding: 10px;
      }
    }
  }
}

.new-message {
  content: "";
  bottom: 10px;
  left: 0;
  width: 97%;
  margin: 0;
  margin: 0 auto;
  &__input {
    padding: 0.3em;
    width: 100%;
    transition: 0.3s;
    border: 1px solid #1b2538;
    border-radius: 4px;
    outline: none;
    display: block;
    &:focus{
    	border-color: #1b2538;
    }
  }
  &__btns {
    display: flex;
    flex-direction: row-reverse;
    padding: 10px 0 0;
    i {
      cursor: pointer;
      padding: 5px;
      color: #fff;
    }
    .fa-reply {
      background:#007a5a;
    }
    .fa-image {
      background:#FBC02D;
      &:nth-of-type(n + 2){
        margin-right: 10px;
      }
    }
  }
}

</style>