import Vue from 'vue'


import PageHeader from '~/components/Layout/PageHeader'
import ModalArea from '~/components/Layout/ModalArea'
import HeaderBar from '~/components/modules/HeaderBar'
import NavigationDrawer from '~/components/modules/NavigationDrawer'
import GroupNew from '~/components/modules/GroupNew'
import OtherUserProfile from '~/components/modules/OtherUserProfile'
import AddUserToGroup from '~/components/modules/AddUserToGroup'
import CurrentUserProfile from '~/components/modules/CurrentUserProfile'

Vue.mixin({
  components: {
    //以下はLayout用
    PageHeader,
    ModalArea,
    //以下はmodules
    HeaderBar,
    NavigationDrawer,
    GroupNew,
    OtherUserProfile,
    CurrentUserProfile,
    AddUserToGroup
  },
})

