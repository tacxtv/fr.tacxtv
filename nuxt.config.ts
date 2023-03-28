import { defineNuxtConfig, NuxtConfig } from 'nuxt/config'
import pugPlugin from 'vite-plugin-pug'

/**
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig(<NuxtConfig>{
  telemetry: false,
  pages: true,
  srcDir: 'src',

  components: {
    global: true,
    dirs: [{ path: '~/components' }],
  },

  css: [
    '~/assets/sass/main.sass',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    define: {
      'process.env.DEBUG': !!process.env.DEBUG,
    },
    plugins: [
      pugPlugin({
        pretty: true,
      } as any)
    ],
  },
})
