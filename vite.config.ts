import { defineConfig } from 'vite'
import Preact from '@preact/preset-vite'
import UnoCSS from 'unocss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Preact(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
