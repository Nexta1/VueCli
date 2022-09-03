export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    auth: true,
    menu: { title: 'Editor', icon: 'fab fa-cotton-bureau' },
  },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editors/Markdown.vue'),
      meta: { menu: { title: 'Markdown' } },
    },
    {
      name: 'wangeditor',
      path: 'wangeditor',
      component: () => import('@/views/editors/wangEditor.vue'),
      meta: { menu: { title: 'wangeditor' } },
    },
  ],
}
