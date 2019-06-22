import { RootState } from '@/store';
import { Module } from 'vuex';
import * as request from '@/lib/Request';
import Filter from '@/lib/Dto/Search/Filter';
import Result from '@/lib/Dto/Search/Result';
import SearchResponse from '@/lib/Dto/Response/Search/SearchResponse';
import FilterResponse from '@/lib/Dto/Response/Search/FilterResponse';
import Variant from '@/lib/Dto/Search/Variant';

export interface SearchState {
  filters: Filter[];
  query: string;
  results: Result[];
}

interface SelectedVariants {
  checkedVariantNames: string[];
  filter: Filter;
}

function makeQuery(query: string, filters: Filter[]) {
  const result: { [key: string]: string } = { q: query };

  filters.forEach((filter) => {
    const values: string[] = [];
    filter.variants.forEach((variant) => {
      if (variant.checked) {
        values.push(variant.code);
      }
    });

    if (values.length) {
      result[filter.code] = values.join(',');
    }
  });

  return result;
}

let timeout: number;

const SearchModule: Module<SearchState, RootState> = {
  namespaced: true,
  state: {
    filters: [],
    query: '',
    results: [],
  },
  actions: {
    async loadFilters({ commit }) {
      const response = await request.getRequest<FilterResponse>('/fittings/search/filters/');
      commit('SET_FILTERS', response.filters);
    },
    async search({ state, commit }) {
      const query = makeQuery(state.query, state.filters);
      const response = await request.getRequest<SearchResponse>('/fittings/search/', query);
      commit('SET_FILTERS', response.filters);
      commit('SET_RESULTS', response.results);
    },
    setQuery({ commit, dispatch }, payload: string) {
      commit('SET_QUERY', payload);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch('search');
      }, 500);
    },
    selectFilterVariants({ commit, dispatch }, payload: SelectedVariants) {
      commit('SET_CHECKED_VALUES', payload);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch('search');
      }, 500);
    }
  },
  mutations: {
    SET_QUERY(state, payload: string) {
      state.query = payload;
    },
    SET_FILTERS(state, payload: Filter[]) {
      state.filters = payload;
    },
    SET_RESULTS(state, payload: Result[]) {
      state.results = payload;
    },
    SET_CHECKED_VALUES(state, payload: SelectedVariants) {
      let filter = state.filters.find((filter: Filter) => {
        return payload.filter.code === filter.code;
      });

      if (filter) {
        filter.variants.forEach((variant: Variant) => {
          variant.checked = payload.checkedVariantNames.indexOf(variant.name) !== -1;
        });
      }
    }
  },
  getters: {
    filter: (state: SearchState) => (code: string): Filter | undefined => {
      return state.filters.find((filter) => filter.code === code);
    },
  },
};

export default SearchModule;
