// stores/demoStore.js
import { defineStore } from 'pinia';
import { fetchDemo } from '@/api/fetchDemo';

export const useDemoStore = defineStore({
  id: 'demo',
  state: () => ({
    data: [],
  }),
  actions: {
    async fetchDemoData() {
      const response = await fetchDemo();
      if (response.code === 200) {
        this.data = response.data;
      }
    },
  },
});
