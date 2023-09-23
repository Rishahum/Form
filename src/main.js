import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import from 'vue-router'
import SecondPg from './components/SecondPg.vue';
import HelloWorld from './components/HelloWorld.vue';

// Other imports and Vue app setup code

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/sec', component: SecondPg }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
