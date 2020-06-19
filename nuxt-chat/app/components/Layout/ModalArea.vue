<template>
  <div class="modal-mask" v-if="modalActive" @click.self="modalChange(false)">
    <GroupNew />  
    <!-- <CurrentUserProfile /> -->
    <!-- <OtherUserProfile /> -->
  </div>
</template>


<script>

import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState("chat", ["modalActive"])
  },
  methods: {
    ...mapMutations("chat", ["modalChange"])
  }
  
}
</script>
<style lang="scss" scoped>
.modal-mask {
  background-color: rgb(33, 33, 33, 0.46);
  border-color: rgb(33, 33, 33);
  border-radius: inherit;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: inherit;
  width: 100%;
  will-change: opacity;
  z-index: 100;
}
</style>