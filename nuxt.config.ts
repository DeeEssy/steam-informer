import { i18nConfig } from './shared/config/i18n/i18n.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],

  i18n: i18nConfig,

  css: ['~/app/styles/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: [
    {
      path: 'shared',
      extensions: ['.vue'],
      prefix: 'Shared',
      pathPrefix: false,
    },
    {
      path: 'features',
      extensions: ['.vue'],
      prefix: 'Feature',
      pathPrefix: false,
    },
    {
      path: 'widgets',
      extensions: ['.vue'],
      prefix: 'Widget',
      pathPrefix: false,
    },
    {
      path: 'entities',
      extensions: ['.vue'],
      prefix: 'Entity',
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: [
      'shared/**/*.ts',
      'features/**/*.ts',
      'widgets/**/*.ts',
      'entities/**/*.ts',
    ],
  },

  runtimeConfig: {
    steamApiKey: process.env.STEAM_API_KEY,
    public: {
      hostUrl: process.env.HOST_URL,
      apiUrl: process.env.BASE_API_URL,
      defaultTimezone: process.env.APP_TIMEZONE || 'Europe/London',
    },
  },

  typescript: {
    strict: true,
  },
})
