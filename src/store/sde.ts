import { RootState } from '@/store';
import { Module } from 'vuex';
import SdeDb from '@/lib/Db/SdeDb';

export interface SdeState {

}

const SdeModule: Module<SdeState, RootState> = {
  namespaced: true,
  state: {
    characters: [],
  },
  actions: {
    async load() {
      await SdeDb.load();
    },
  },
  mutations: {},
};

export default SdeModule;
