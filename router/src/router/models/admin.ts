export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true},
}
