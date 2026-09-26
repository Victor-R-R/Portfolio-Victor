import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    server: {
      port: parseInt(env.VITE_PORT) || 3000,
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(import.meta.dirname, 'index.html'),
          card: resolve(import.meta.dirname, 'card/index.html'),
        },
      },
    },
  }
})
