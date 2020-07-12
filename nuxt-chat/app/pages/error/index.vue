<template>
  <div>
    <nuxt-link to="/group/"></nuxt-link>
    <p>ここはエラーページですよ</p>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'error'
    },
    title: "error"
  }
}
</script>