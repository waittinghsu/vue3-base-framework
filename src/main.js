// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import './styles/global.scss';

const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState());

app.use(router);
app.use(pinia);
app.mount('#app');
