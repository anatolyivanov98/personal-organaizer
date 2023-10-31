import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HomeView,
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'default'
      }
    }
  ]
} as RouterOptions)

export default router
