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
      path: '/pay',
      name: 'pay',
      component: () => import('@/views/pay/index.vue')
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/documents/index.vue'),
      children: [
        {
          path: 'user-agreement',
          name: 'useragreement',
          component: () => import('@/views/documents/user-agreement.vue')
        },
        {
          path: 'privacy-agreement',
          name: 'privacyagreement',
          component: () => import('@/views/documents/privacy-agreement.vue')
        },
        {
          path: 'children-privacy-agreement',
          name: 'children-privacyagreement',
          component: () => import('@/views/documents/children-privacy-agreement.vue')
        },
        {
          path: 'service-agreement',
          name: 'serviceagreement',
          component: () => import('@/views/documents/service-agreement.vue')
        },
        {
          path: 'artificial-intelligence-agreement',
          name: 'artificial-intelligence-agreement',
          component: () => import('@/views/documents/artificial-intelligence-agreement.vue')
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
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
