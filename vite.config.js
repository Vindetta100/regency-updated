import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize build output
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
        },
      },
    },
    // Increase chunk size warning limit for video files
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  server: {
    // Enable compression
    compress: true,
    // Enable HTTP/2
    http2: false,
    // Optimize dev server
    hmr: {
      overlay: false,
    },
    // Allow external hosts
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '.manusvm.computer',
      '3000-iit0emp4wv3u0gg805j4i-e4a95aca.manusvm.computer'
    ],
  },
  // Asset optimization
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.mov'],
})

