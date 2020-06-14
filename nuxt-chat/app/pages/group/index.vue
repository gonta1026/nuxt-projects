<template>
  <v-app id="inspire">
    <PageHeader />
    <v-content>
      <v-container
      >
        <p>気になるグループがあれば是非入ってください！もしくは新しく作成しても良いかもしれません！</p>
      </v-container>
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
body .v-application--wrap {
  min-height: auto;
}

</style>