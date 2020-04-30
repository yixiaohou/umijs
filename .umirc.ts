import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: "/",
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/user',
          component: '@/pages/user/index',
          title: "用户中心",
          routes: [
            {
              path: './center1', component: "@/pages/user/center/index", title: "用户center1"
            },
            {
              path: './center2', component: "@/pages/user/center2/index", title: "用户center2"
            }
          ]
        },
      ]
    }

  ],
});
