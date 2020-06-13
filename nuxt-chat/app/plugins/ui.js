import Vue from 'vue'


import PageHeader from '~/components/Layout/PageHeader'
import HeaderBar from '~/components/modules/HeaderBar'
import NavigationDrawer from '~/components/modules/NavigationDrawer'
Vue.mixin({
  components: {
    //modules
    PageHeader,
    HeaderBar,
    NavigationDrawer
    // atoms
  },
})

