<!-- src/layout/index.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-blue-500 text-white p-4">Header</header>
    <main class="flex-grow">
      <AppMain />
    </main>
    <footer class="bg-blue-500 text-white p-4">Footer</footer>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppMain,
  },
};
</script>
