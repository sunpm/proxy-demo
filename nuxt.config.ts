// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/proxy': {
      proxy: {
        to: 'https://3yya.com/u/0dac3d04959d802a',
      },
    },
  },
})
