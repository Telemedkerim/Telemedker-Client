// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    ssr: {
      noExternal: ['yaml', 'node.js', 'debug'],
    },
  },
  routeRules: {
    '/**': { prerender: true },
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  css: [
 '@iconscout/unicons/css/line.css',
    '~/assets/scss/style.scss',

  ],
  

  app: {
    head: {
      title: 'Landflow - Nuxt js Multipurpose Template',
      titleTemplate: 'Landflow - Nuxt js Multipurpose Template',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js'
        },
      ]
    },
  },

  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
      concurrency: 30,
    },
    output: {
      dir: 'dist',
      publicDir: 'dist',
    },
  },
  ssr: true,
  compatibilityDate: '2024-07-05',
  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: '2024-07-10',
  modules: ['@nuxt/eslint', 'nuxt-mdi'],
})