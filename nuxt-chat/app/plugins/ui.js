import Vue from 'vue'


import PageHeader from '~/components/Layout/PageHeader'
import ModalArea from '~/components/Layout/ModalArea'
import HeaderBar from '~/components/modules/HeaderBar'
import NavigationDrawer from '~/components/modules/NavigationDrawer'
import GroupNew from '~/components/modules/GroupNew'
import OtherUserProfile from '~/components/modules/OtherUserProfile'
import CurrentUserProfile from '~/components/modules/CurrentUserProfile'

Vue.mixin({
  components: {
    //以下はmodules
    PageHeader,
    HeaderBar,
    NavigationDrawer,
    GroupNew,
    OtherUserProfile,
    CurrentUserProfile,
    // 以下はatoms用
    ModalArea,
  },
})

