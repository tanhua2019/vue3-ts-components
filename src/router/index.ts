import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/table'
  },
  {
    path: '/table',
    component: () => import('@/views/table/index.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router