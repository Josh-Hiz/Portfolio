// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'pages/about.html'),
        nested: resolve(__dirname, 'pages/contact.html'),
        nested: resolve(__dirname, 'pages/projects.html'),
      },
    },
  },
})