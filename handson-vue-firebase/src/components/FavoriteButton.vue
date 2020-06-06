<template>
  <vs-button
    class="button"
    color="danger"
    @click.prevent="like"
    :vs-type="isLiked ? 'filled' : 'border'"
    vs-icon="favorite"
    :style="`margin-right: 10px;${isLiked && 'background: rgb(255, 71, 87)'};`"
  />
</template>

<script>
export default {
  props: {
    isLiked: Boolean
  },
  methods: {
    like() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.button.vs-button-border {
  background: #fff !important;
}
</style>
