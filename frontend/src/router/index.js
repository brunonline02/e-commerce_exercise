import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../store/views/Dashboard.vue"
import Login from "../store/views/Login.vue"

const routes = [
    {
        path: '/'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router