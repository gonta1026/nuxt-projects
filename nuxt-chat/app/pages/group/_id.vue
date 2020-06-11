<template>
  <v-app id="inspire">
    <Header />
    <v-content>
      <v-container>
        <ul>
          <li>
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
            <div class="text-content">
              <div class="text">今日も元気ですか</div>
              <small>2020/3/3</small>
            </div>
          </li>
        </ul>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  
</style>