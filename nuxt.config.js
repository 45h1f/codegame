export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'codegame',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/bootstrap.min.css',
    '~/static/css/owl.theme.default.min.css',
    '~/static/css/owl.carousel.min.css',
    '~/static/css/animate.min.css',
    '~/static/css/boxicons.min.css',
    '~/static/css/magnific-popup.min.css',
    '~/static/css/flaticon.css',
    '~/static/css/meanmenu.min.css',
    '~/static/css/nice-select.min.css',
    '~/static/css/odometer.min.css',
    '~/static/css/style.css',
    '~/static/css/responsive.css',
  ],

  script: [
    // {src: '~/static/js/jquery.min.js'},
    // {src: '~/static/js/bootstrap.bundle.min.js'},
    // {src: '~/static/js/meanmenu.min.js'},
    // {src: '~/static/js/owl.carousel.min.js'},
    // {src: '~/static/js/nice-select.min.js'},
    // {src: '~/static/js/magnific-popup.min.js'},
    // {src: '~/static/js/jarallax.min.js'},
    // {src: '~/static/js/appear.min.js'},
    // {src: '~/static/js/odometer.min.js'},
    // {src: '~/static/js/smoothscroll.min.js'},
    // {src: '~/static/js/form-validator.min.js'},
    // {src: '~/static/js/contact-form-script.js'},
    // {src: '~/static/js/ajaxchimp.min.js'},
    // {src: '~/static/js/wow.min.js'},
    // {src: '~/static/js/custom.js'},
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
