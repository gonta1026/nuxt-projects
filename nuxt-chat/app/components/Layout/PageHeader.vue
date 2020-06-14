<template>
  <header class="header">
    <HeaderBar
      @changeDrawer="drawer = !drawer"
    />
    <NavigationDrawer 
      :props-drawer="drawer"
    />
  </header>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),
  methods: {
    changeState(){
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>