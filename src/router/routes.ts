export const constantRoutes = [
  {
    path: '/',
    // redirect: '/home',
    meta: { title: '布局' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        meta: { title: '首页' },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/test',
        meta: { title: '测试' },
        component: () => import('@/views/test/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '/test',
    meta: { title: '测试' },
    component: () => import('@/views/test/index.vue'),
  },
  {
    path: '/404',
    meta: { title: '404' },
    component: () => import('@/views/404/index.vue'),
    hidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    meta: { title: '缺省页' },
    redirect: '/404',
    hidden: true,
  },
];
