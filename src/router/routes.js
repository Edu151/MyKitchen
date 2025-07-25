const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {path: 'Produtos', component: () => import('pages/Produto.vue')},
      {
        path: '/produtos/:id',
        component: () => import('pages/Produto.vue')
      },
      {path: 'admin', component: () => import('pages/Admin.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
