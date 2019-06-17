import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/callback',
      name: 'auth-callback',
      component: () => import(/* webpackChunkName: "auth-callback" */ './views/AuthCallback.vue'),
    },
    {
      path: '/',
      name: 'main',
      component: Home,
    },
    {
      path: '/options',
      name: 'options',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "options" */ './views/Options.vue'),
    },
  ],
});
