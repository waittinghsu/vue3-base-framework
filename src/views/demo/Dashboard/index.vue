<template>
  <div>
    <h1>Dashboard</h1>
    <p>{{ data }}</p>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDemoStore } from '../../stores/demoStore';

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
