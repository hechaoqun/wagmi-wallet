import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  server: {
      host: '0.0.0.0', // 监听所有网络接口
      port: 5173, // 默认端口
  }
})
