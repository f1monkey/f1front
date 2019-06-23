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
      component: () => import(/* webpackChunkName: "options" */ './views/Options.vue'),
    },
    {
      path: '/loadouts',
      name: 'loadouts',
      component: () => import(/* webpackChunkName: "loadouts" */ './views/Loadouts.vue'),
    },
    {

      path: '/loadouts/:id',
      name: 'loadout-view',
      component: () => import(/* webpackChunkName: "loadout" */ './views/Loadout.vue'),
    },
  ],
});
