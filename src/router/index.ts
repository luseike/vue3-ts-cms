import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})
export default router
