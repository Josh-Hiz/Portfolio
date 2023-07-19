// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
const root = resolve(__dirname, './')
const outDir = resolve(__dirname, 'dist')
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        contacts: resolve(root, 'pages/contacts','index.html'),
        about: resolve(root, 'pages/about','index.html'),
        projects: resolve(root, 'pages/projects','index.html'),
      },
    },
  },
})