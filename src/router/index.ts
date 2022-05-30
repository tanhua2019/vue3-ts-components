import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/icon',
    component: () => import('@/components/container/index.vue'),
    children: [
      {
        path: '/table',
        component: () => import('@/views/table/index.vue')
      },
      {
        path: '/icon',
        component: () => import('@/views/icon/index.vue')
      },
    ]
  }
  
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router