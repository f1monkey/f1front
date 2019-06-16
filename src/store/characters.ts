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
            const response = await request.get('/characters/');
            this.commit('characters/setCharacterList', response.characters);
        },
    },
    mutations: {
        setCharacterList(state: CharacterState, payload: Character[]) {
            state.characters = payload;
        },
    },
};

export default Character;
