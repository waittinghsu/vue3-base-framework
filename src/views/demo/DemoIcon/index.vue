<template>
  <div>
    <h1>Icon</h1>
    <p>{{ data }}</p>
    <div class="bg-customBlue text-white p-4">
      <label>1234567890</label>
    </div>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDemoStore } from '@/stores/demoStore';

const store = useDemoStore();
const data = ref([]);

onMounted(async () => {
  await fetchData();
});

const fetchData = async () => {
  await store.fetchDemoData();
  data.value = store.data;
};
</script>
