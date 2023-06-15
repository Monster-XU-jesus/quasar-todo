import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'src/plugins/firebase';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

app.mount('#app');

console.log(12321321);
