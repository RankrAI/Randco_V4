import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Ensure public directory assets are copied
    copyPublicDir: true
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  // Ensure public directory is properly handled
  publicDir: 'public',
  // Add explicit asset handling
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.JPEG', '**/*.png', '**/*.PNG', '**/*.webp', '**/*.gif', '**/*.svg']
});