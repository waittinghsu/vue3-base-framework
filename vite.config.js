import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock', // mock 文件的位置
    }),
  ],
});
