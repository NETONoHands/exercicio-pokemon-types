import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//  server: {
//    port: 5173,
//    proxy: {
//      '/api': {
//        target: 'http://localhost:8080', // URL do servidor backend
//        changeOrigin: true,
//        rewrite: (path) => path.replace(/^\/api/, '')
//      }
//    }
//  }
//})


export default defineConfig(({ command }) => ({
  plugins: [react()],

  // GitHub Pages (project site): https://<USER>.github.io/<REPO>/
  base: '/exercicio-pokemon-types/',

  // Tudo dentro de server.* é voltado ao DEV (vite dev server)
  ...(command === 'serve'
    ? {
        server: {
          port: 5173,
          proxy: {
            '/api': {
              target: 'http://localhost:8080',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
          },
        },
      }
    : {}),
}))
