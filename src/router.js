import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/AppHome.vue';
import Login from './pages/AppLogin.vue';
import Register from './pages/AppRegister.vue';
import MovieDetailPage from './pages/MovieDetailPage.vue';
import Profile from './components/AppProfile.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/movie/:id', component: MovieDetailPage, props: true },
    { path: '/profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
