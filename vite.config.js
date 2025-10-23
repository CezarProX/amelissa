import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Advanced rollup options for code splitting
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks - libraries that rarely change
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          // Component chunks
          'mobile-components': [
            './src/components/mobile/MobileHeader.jsx',
            './src/components/mobile/MobileHero.jsx',
            './src/components/mobile/MobileAbout.jsx',
            './src/components/mobile/MobileMusic.jsx',
            './src/components/mobile/MobileFooter.jsx',
            './src/components/mobile/MobileBackToTop.jsx',
          ],
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps for debugging (can disable in production)
    sourcemap: false,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
  },
})
