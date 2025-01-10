import { fileURLToPath, URL } from 'node:url'
import XMLLoader from 'vite-plugin-xml-loader' 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from "path";

// https://vitejs.dev/config/

const isGP_Build = process.env.APP_ENV === 'gp'
const publicPath = isGP_Build ? '/PrettyXml' : ''
export default defineConfig({
  publicPath,
  plugins: [
    vue(),
    XMLLoader(),
  ],
  build: isGP_Build ? {} : {
    lib:{
      entry: resolve(__dirname, "src/index.js"),      
      name: "pretty-xml-vue3",
      fileName: (format)=>`pretty-xml-vue3.${format}.js`
    },
    rollupOptions:{
      external: ["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
