import { RouteRecordRaw } from 'vue-router'

const routes = [
 
  {
    path: '/:any(.*)',
    name: 'notfound',
    component: () => import('@/views/errors/404.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login.vue'),
    meta: { guest: true },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
 
] as RouteRecordRaw[]
export default routes
