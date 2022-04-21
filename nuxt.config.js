export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'login-page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css',
        integrity: 'sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl',
        crossorigin: 'anonymous',
    },
    ],
    script: [{
      type: 'application/ld+json',
      json: {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': '#website',
          url: `https:\/\/www.${process.env.BASE_URL}\/`,
          name: `${process.env.SCHEMA_NAME}`,
          potentialAction: {
              '@type': 'SearchAction',
              target: `https:\/\/www.${process.env.BASE_URL}\/?s={search_term_string}`,
              'query-input': 'required name=search_term_string',
          },
      },
  },
  {
      ['data-src']: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js',
      integrity: 'sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0',
      crossorigin: 'anonymous',
      defer: true,
  },
  {
      src: '/js/loadScripts.js',
      defer: true,
  },
  {
      ['data-src']: '/js/pixels/fb.js',
      defer: true,
  },
],
    
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  }
}
