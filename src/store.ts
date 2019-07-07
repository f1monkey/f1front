import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import characters from '@/store/characters';
import search from '@/store/search';
import sde from '@/store/sde';

Vue.use(Vuex);

export interface RootState {
  loading: boolean;
  userId: number;
}

const store: StoreOptions<RootState> = {
  state: {
    loading: true,
    userId: 1,
  },
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.loading = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload: boolean) {
      commit('SET_LOADING', payload);
    },
    error() {
      // we need it to display errors
    },
  },
  modules: {
    characters,
    search,
    sde,
  },
};

export default new Vuex.Store<RootState>(store);
