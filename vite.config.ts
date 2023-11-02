import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf'],
  resolve: {
    alias: {
      '@animations': path.resolve(__dirname, './src/ui/style/animation/'),
      '@icons': path.resolve(__dirname, './src/ui/assets/icons/'),
      '@imgs': path.resolve(__dirname, './src/ui/assets/img/'),
      '@services': path.resolve(__dirname, './src/data/service/'),
      '@utils': path.resolve(__dirname, './src/data/util/'),
    }
  },
  build: {
    outDir: './public'
  }
})
