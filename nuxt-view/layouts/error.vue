<template>
  <div>
    <h1 v-if="error.statusCode == 404">エラーです</h1>
  </div>
</template>

<script>
export default {
  props: ["error"]
}
</script>