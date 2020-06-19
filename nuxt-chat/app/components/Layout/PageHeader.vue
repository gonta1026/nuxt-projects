<template>
  <header class="header">
    <HeaderBar
      @changeDrawer="changeState"
    />
    <NavigationDrawer 
      :props-drawer="drawer"
    />
    
  </header>
</template>

<script>
export default {
  data: function() {
    return { 
      drawer: true
    }
  },
  methods: {
    changeState(){
      this.drawer = !this.drawer;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>