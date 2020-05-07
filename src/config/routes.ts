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
        path: '/compete',
        component: '@/pages/compete/index',
        title: '权限管理',
        routes: [
          {
            path: './user',
            component: '@/pages/compete/user/index',
            title: '用户管理',
          },
          {
            path: './menu',
            component: '@/pages/compete/menu/index',
            title: '角色管理',
          },
          // {
          //   path: './menu',
          //   component: '@/pages/compete/menu/index',
          //   title: '菜单管理',
          // },
          // {
          //   path: './powermodal',
          //   component: '@/pages/compete/powermodal/index',
          //   title: '权限模板',
          // },
        ],
      },
    ],
  },
];
