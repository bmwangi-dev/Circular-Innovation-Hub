import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['cih_logo_vec.png'],
      manifest: {
        name: 'Circular Innovation Hub',
        short_name: 'CIH',
        description: 'Inspiring and enabling the transition to a sustainable world through circular economy excellence.',
        theme_color: '#3d7118',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        icons: [
          {
            src: '/cih_logo_vec.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom') || id.includes('node_modules/react/')) return 'vendor';
          if (id.includes('node_modules/react-helmet-async')) return 'helmet';
          if (id.includes('node_modules/lucide-react')) return 'icons';
        },
      },
    },
    reportCompressedSize: false,
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
