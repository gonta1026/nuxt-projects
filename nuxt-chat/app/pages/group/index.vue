<template>
  <v-app id="inspire">
    <Header />
    <v-content>
      <v-container
      >
        <p>気になるグループがあれば是非入ってください！</p>
        <ul>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
          <li>野球部</li>
        </ul>
      </v-container>
      <form class="new-message">
        <input type="text">
        <v-btn color="warning" dark>Normal Button</v-btn>
      </form>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
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

.new-message {
  position: absolute;
  content: "";
  bottom: 20px;
  left: 0;
  width: 100%;
  margin: 0;
}
.new-message input[type=text] {
  width: 97%;
  margin: 8px auto;
  padding: 0.3em;
  transition: 0.3s;
  border: 1px solid #1b2538;
  border-radius: 4px;
  outline: none;
  display: block;
}
.new-message input[type=text]:focus {
	border-color: #1b2538;
}

.new-message i {
	position: absolute;
	top: 8px;
	left: 0;
	padding: 9px 8px;
	transition: 0.3s;
	color: #aaaaaa;
}
.new-message input[type=text]:focus + i {
	color: #da3c41;
}
</style>