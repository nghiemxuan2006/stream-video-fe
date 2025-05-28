import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          './index.html',
          './src/**/*.{js,jsx,ts,tsx}',
          './src/pages/**/*.{js,jsx,ts,tsx}',
          './src/layout/**/*.{js,jsx,ts,tsx}',
          './src/components/**/*.{js,jsx,ts,tsx}',
        ],
        theme: {
          extend: {
            colors: {
              'body-dark': '#1a202c',
              'bolder': '#2d3748',
            },
          },
        },
      },
    }),
  ],
})
