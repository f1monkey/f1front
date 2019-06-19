import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import characters from '@/store/characters';

Vue.use(Vuex);

export interface RootState {
  userId: number;
}

const store: StoreOptions<RootState> = {
  state: {
    userId: 1,
  },
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
};

export default new Vuex.Store<RootState>(store);
