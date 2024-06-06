import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import AppNavbar from './components/AppNavbar.vue';
import './assets/tailwind.css'; // Impor file CSS Tailwind

createApp(App)
    .use(router)
    .use(pinia)
    .component('AppNavbar', AppNavbar)
    .mount('#app');
