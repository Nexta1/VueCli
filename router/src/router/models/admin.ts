
export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  children: [
    {
      name: 'admin.user',
      path: 'user',
      component: () => import('@/views/admin/user.vue'),
    },
  ],
}
