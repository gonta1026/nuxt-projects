
// ファイル上部で以下のモジュール読み込みを追加
const Sass = require('sass')
const Fiber = require('fibers')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "my website",
    titleTemplate: '%s - My Blog Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "~assets/scss/common.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
