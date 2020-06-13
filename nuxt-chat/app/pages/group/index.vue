<template>
  <v-app id="inspire">
    <HeaderBar />
    <NavigationDrawer />    
    <v-content>
      <v-container
      >
        <p>気になるグループがあれば是非入ってください！もしくは新しく作成しても良いかもしれません！</p>
      </v-container>
      <form class="new-message">
        <input type="text" class="new-message__input">
        <div class="new-message__btns">
          <v-icon>fas fa-reply</v-icon>
          <v-icon>fa-image</v-icon>
        </div>
      </form>
    </v-content>
  </v-app>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'group'
    }
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style lang="scss" scoped>

// .v-content__wrap {
//   padding-bottom: 80px;
// }
.container {
  height: calc(100vh - 150px);
  overflow: hidden;
  overflow-y: scroll;
}

.message-list {
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
  width: 97%;
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