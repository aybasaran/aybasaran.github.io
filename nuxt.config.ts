// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      { name: 'Geomini', provider: 'google', weights: [200, 300, 400, 500, 600, 700, 800] }
    ]
  },

  i18n: {
    baseUrl: 'https://aybasaran.github.io',
    defaultLocale: 'tr',
    strategy: 'prefix_except_default',
    trailingSlash: true,
    locales: [
      { code: 'tr', language: 'tr-TR', file: 'tr.json' },
      { code: 'en', language: 'en-US', file: 'en.json' }
    ]
  }
})
