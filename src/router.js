import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
