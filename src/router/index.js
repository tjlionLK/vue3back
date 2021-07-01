import {createRouter, createWebHashHistory} from "vue-router";
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        meta: {
            title: 'first page'
        },
        component: Home,
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: 'welcome page'
                },
                component: Welcome
            },
            {
                name: 'login',
                path: '/login',
                meta: {
                    title: 'login'
                },
                component: Login
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

