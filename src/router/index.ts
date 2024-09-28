import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/IndexView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Index.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('@/views/login/Index.vue')
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/documents/index.vue'),
      children: [
        {
          path: 'user-agement',
          name: 'userAgement',
          component: () => import('@/views/documents/user-agement.vue')
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/index.vue'),
      children: [
        {
          path: 'music',
          name: 'music',
          component: () => import('@/views/user/music.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
