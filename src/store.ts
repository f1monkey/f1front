import Vue from 'vue';
import Vuex from 'vuex';
import characters from '@/store/characters';

Vue.use(Vuex);

export interface RootState {
  userId: number;
}

const state: RootState = {
  userId: 1,
};

export default new Vuex.Store({
  state,
  mutations: {

  },
  actions: {
    error() {
      // we need it to display errors
    },
  },
  modules: {
    characters,
  },
});
