<template>
  <div id="app">
    <vs-navbar v-model="activeItem" class="nabarx" style="padding: 12px;">
      <vs-navbar-title index="0">
        <router-link to="/">
          Vue.js + Firebase Application
        </router-link>
      </vs-navbar-title>
      <vs-spacer></vs-spacer>
      <vs-navbar-item index="1">
        <router-link to="/posts/new">New post</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/mypage">Mypage</router-link>
      </vs-navbar-item>
    </vs-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0
    }
  }
}
</script>

<style>
.vs-card-footer .vs-button + .vs-button {
  margin-left: 16px;
}

.vs-component {
  font-family: 'Yu Gothic', YuGothic, sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fafafa;
  min-height: 100vh;
}

.nabarx {
  background: #fff !important;
}

p + p {
  margin-top: 16px;
}

.vs-card-content {
  font-size: 14px !important;
  line-height: 2.0 !important;
  margin-bottom: 16px !important;
}

.link {
  color: #333;
}
</style>
