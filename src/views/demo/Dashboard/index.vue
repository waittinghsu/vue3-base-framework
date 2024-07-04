<template>
  <div class="container mx-auto p-4">
    <h1>Dashboard O</h1>
    <p>{{ data }}</p>
    <div class="bg-customTeal-500 p-4">
      <label>1234567890</label>
    </div>
    <div class="py-16">
      <button @click="fetchData" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Click Me
      </button>
      <button @click="fetchUserData" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-16">
        Get User
      </button>
    </div>

    <section class="">
      <div v-if="user">
        <p>Name: {{ user.name }}</p>
        <p>Age: {{ user.age }}</p>
      </div>
      <div v-else-if="error">
        <p>{{ error }}</p>
      </div>
      <div v-else>
        <p class="text-teal-500">Loading...</p>
      </div>
    </section>

    <section class="mt-16">
      <p ref="textElement">{{ displayedText }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDemoStore } from '@/stores/demoStore';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import gsap from 'gsap';

// 你想要顯示的文本
const originalText = "Hello, this is a bouncing text example! Animate me with GSAP!";
const textElement = ref(null);
const displayedText = ref("");

const userStore = useUserStore();
const store = useDemoStore();
const data = ref([]);
const fontSizeClasses = [
  // 'text-xs',   // Extra small text (0.75rem)
  // 'text-sm',   // Small text (0.875rem)
  // 'text-base', // Base (normal) text (1rem)
  // 'text-lg',   // Large text (1.125rem)
  // 'text-xl',   // Extra large text (1.25rem)
  // 'text-2xl',  // 2x large text (1.5rem)
  'text-3xl',  // 3x large text (1.875rem)
  'text-4xl',  // 4x large text (2.25rem)
  'text-5xl',  // 5x large text (3rem)
  'text-6xl',  // 6x large text (3.75rem)
  'text-7xl',  // 7x large text (4.5rem)
  'text-8xl',  // 8x large text (6rem)
  'text-9xl'   // 9x large text (8rem)
];
const colorClasses = [
  'bg-slate',
  'bg-zinc',
  'bg-neutral',
  'bg-stone',
  'bg-red',
  'bg-orange',
  'bg-amber',
  'bg-yellow',
  'bg-lime',
  'bg-green',
  'bg-emerald',
  'bg-teal',
  'bg-cyan',
  'bg-sky',
  'bg-blue',
  'bg-indigo',
  'bg-violet',
  'bg-purple',
  'bg-fuchsia',
  'bg-pink',
  'bg-rose'
];
const textColorClasses = [
  'text-slate',
  'text-gray',
  'text-zinc',
  'text-neutral',
  'text-stone',
  'text-red',
  'text-orange',
  'text-amber',
  'text-yellow',
  'text-lime',
  'text-green',
  'text-emerald',
  'text-teal',
  'text-cyan',
  'text-sky',
  'text-blue',
  'text-indigo',
  'text-violet',
  'text-purple',
  'text-fuchsia',
  'text-pink',
  'text-rose'
];

// For easier readability, each value in the array above corresponds to a basic Tailwind CSS color class.
onMounted(async () => {
  // await fetchData();
  let textHTML = '';
  for (let char of originalText) {
    const textColor = textColorClasses[Math.floor(Math.random()*colorClasses.length)];
    const fontSize = fontSizeClasses[Math.floor(Math.random()*fontSizeClasses.length)];
    textHTML += `<span class="inline-block ${textColor}-500 ${fontSize} p-1">${char}</span>`;
  }
  textElement.value.innerHTML = textHTML;

  const spans = textElement.value.querySelectorAll('span');
  gsap.to(spans, {
    y: -20,                  // 跳動的高度
    stagger: 0.05,           // 每個字母之間的延遲
    ease: "bounce",          // 跳動效果
    duration: 0.5,           // 動畫持續時間
    repeat: -1,              // 無限循環
    yoyo: true,              // 反向運動
  });
});

const fetchData = async () => {
  await store.fetchDemoData();
  data.value = store.data;
};
const fetchUserData = async () => {
  await userStore.fetchUser();
};

const { user, error } = storeToRefs(userStore);

</script>
