<!-- Example.vue -->
<template>
  <div>
    <p>Mouse is at: {{ x }}, {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>
