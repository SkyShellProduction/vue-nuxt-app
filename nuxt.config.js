export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: 'key' },
      { name: 'google-site-verification', content: 'key' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"}
    ]
  },
  transition: {
     name: 'fade',
     mode: 'out-in'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: "~/assets/scss/main.scss", lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
     '~/plugins/app-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: [
    //   'vue',
    //   'axios'
    // ]
  },
  generate: {
    fallback: '404.html'
  }
  // router: {
  //   middleware: ['auth']
  // }
}
