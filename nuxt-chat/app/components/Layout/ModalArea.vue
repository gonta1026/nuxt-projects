<template>
  <div class="modal-mask" v-if="modalActive.isMaskActive" @click.self="modalClose">
    <GroupNew v-if="modalActive.isGroupNewFrom"/>  
    <CurrentUserProfile v-if="modalActive.isCurrentUserProfile"/>
    <OtherUserProfile v-if="modalActive.isOtherUserProfile"/>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState("chat", ["modalActive"])
  },
  methods: {
    ...mapMutations("chat", ["modalClose"])
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
  z-index: 9;
}
</style>