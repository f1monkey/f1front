import { RootState } from '@/store';
import { Module } from 'vuex';
import * as request from '@/lib/Request';

interface Character {
    id: number;
    name: string;
}

export interface CharacterState {
    characters: Character[] | null;
}

const Character: Module<CharacterState, RootState> = {
    namespaced: true,
    actions: {
        async load({ commit, state }) {
            this.commit('characters/setCharacterList', await request.get('/characters/'));
        },
    },
    mutations: {
        setCharacterList(state: CharacterState, payload: Character[]) {
            state.characters = payload;
        },
    },
};

export default Character;
