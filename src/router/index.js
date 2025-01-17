import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('../views/Home/Home.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('../views/About/About.vue')
                },
                {
                    path: '/list',
                    name: 'list',
                    component: () => import('../views/Catalog/Catalog.vue')
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('../views/Contact/Contact.vue')
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: () => import('../views/Cart/Cart.vue')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('../views/Public/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('../views/Public/Register.vue')
                },
                {
                    path: '/detail',
                    name: 'detail',
                    component: () => import('../views/Detail/Detail.vue')
                },
                {
                    path: '/location',
                    name: 'location',
                    component: () => import('../views/Location/Location.vue')
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: () => import('../views/Error/Error.vue')
        },
    ]
})

export default router