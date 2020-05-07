export default [
  {
    path: 'login',
    component: '@/pages/login/index',
  },
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/wrappers/auth'],
    routes: [
      { path: '/', component: '@/pages/index' },
      {
        path: '/table',
        component: '@/pages/table/index',
        title: '表单示例',
      },
      {
        path: '/user',
        component: '@/pages/user/index',
        title: '用户中心',
        routes: [
          {
            path: './center1',
            component: '@/pages/user/center/index',
            title: '用户center1',
          },
          {
            path: './center2',
            component: '@/pages/user/center2/index',
            title: '用户center2',
          },
        ],
      },
    ],
  },
];
