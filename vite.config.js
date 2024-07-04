import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock', // mock 文件的位置
      localEnabled: true,
    }),

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
