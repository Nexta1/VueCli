export default {
  name: 'operate',
  path: '/operate',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: 'Dashboard', icon: 'fab fa-cotton-bureau' } },
  children: [
    {
      name: 'dash',
      path: 'dash',
      component: () => import('@/views/operate/dash.vue'),
      meta: { menu: { title: 'dash' } },
    },
  ],
}
