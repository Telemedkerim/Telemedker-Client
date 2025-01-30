// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/libs/@mdi/font/css/materialdesignicons.min.css',
    '~/assets/libs/@iconscout/unicons/css/line.css',
    '~/assets/scss/style.scss',

  ],
  
  plugins: [
    '~/plugins/trustpilot.client.ts'
  ],
  app: {
    head: {
      title: 'Space4Time',
      titleTemplate: 'Space4Time',
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
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        },
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
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js'
        },

      ]
    },
  },

  compatibilityDate: '2024-07-10',
  modules: ['@nuxt/eslint'],
})