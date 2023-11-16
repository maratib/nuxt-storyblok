// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/roboto.css'],
  modules: [
    ['@storyblok/nuxt',
      {
        accessToken: 'EFtLShAzb4W0xree3jRc0gtt',
        apiOptions: {
          region: "us",
        },
      }
    ],
    '@nuxtjs/tailwindcss',
  ],

})
