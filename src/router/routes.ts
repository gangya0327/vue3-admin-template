export const constantRoutes = [
  {
    path: '/login',
    meta: { title: '登录', icon: 'Position' },
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '/test',
    meta: { title: '测试', icon: 'Filter' },
    component: () => import('@/views/test/index.vue'),
    hidden: true,
  },
  {
    path: '/',
    // redirect: '/home',
    meta: { title: '布局', icon: 'Crop' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        meta: { title: '首页', icon: 'House' },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/screen',
    meta: { title: '数据大屏', icon: 'Monitor' },
    component: () => import('@/views/screen/index.vue'),
  },
  {
    path: '/acl',
    meta: { title: '权限管理', icon: 'Setting' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/acl/user',
        meta: { title: '用户管理', icon: 'User' },
        component: () => import('@/views/acl/user/index.vue'),
      },
      {
        path: '/acl/role',
        meta: { title: '角色管理', icon: 'Lock' },
        component: () => import('@/views/acl/role/index.vue'),
      },
      {
        path: '/acl/menu',
        meta: { title: '菜单管理', icon: 'Tickets' },
        component: () => import('@/views/acl/menu/index.vue'),
      },
    ],
  },
  {
    path: '/product',
    meta: { title: '商品管理', icon: 'Goods' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/product/trademark',
        meta: { title: '品牌管理', icon: 'ShoppingCartFull' },
        component: () => import('@/views/product/trademark/index.vue'),
      },
      {
        path: '/product/attr',
        meta: { title: '属性管理', icon: 'CollectionTag' },
        component: () => import('@/views/product/attr/index.vue'),
      },
      {
        path: '/product/sku',
        meta: { title: 'SKU管理', icon: 'CreditCard' },
        component: () => import('@/views/product/sku/index.vue'),
      },
      {
        path: '/product/spu',
        meta: { title: 'SPU管理', icon: 'PriceTag' },
        component: () => import('@/views/product/spu/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    meta: { title: '404', icon: 'Search' },
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
