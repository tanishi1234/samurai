import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolveComponent } from 'vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'public'
  },
  server: {
    port: 80,
    host: '0.0.0.0',
  }
})
