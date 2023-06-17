import { RouteRecordRaw } from 'vue-router';
import useAuthentication from '../hooks/loginRoutes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TodoPage.vue') },
      // {
      //   path: ':id',
      //   component: () => import('layouts/MainLayout.vue'),
      //   ...useAuthentication(),
      // },
    ],
    // ...useAuthentication(),
  },
  {
    path: '/:id',
    component: () => import('layouts/MainLayout.vue'),
    ...useAuthentication(),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../pages/auth/LoginPage.vue'),
      },
    ],
    ...useAuthentication(),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
