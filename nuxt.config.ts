// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './src/',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_globals.scss";'
        }
      }
    }
  },
  modules: [
    '@nuxt/content',
    [
      '@pinia/nuxt', {
        autoImports: [
          'defineStore',
        ],
      },
    ],
  ],
  content: {
    highlight: {
      theme: 'github-dark'
    }
  }
})
