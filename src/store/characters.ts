import { RootState } from '@/store';
import { Module } from 'vuex';
import * as request from '@/lib/Request';
import GetRedirectUrlResponse from '@/lib/Dto/Response/Character/GetRedirectUrlResponse';
import CharacterListResponse from '@/lib/Dto/Response/Character/CharacterListResponse';
import Character from '@/lib/Dto/Character';
import CharacterResponse from '@/lib/Dto/Response/Character/CharacterResponse';

export interface CharacterState {
    characters: Character[];
}

const CharacterModule: Module<CharacterState, RootState> = {
    namespaced: true,
    state: {
        characters: []
    },
    actions: {
        async load({ commit, state }) {
            const response: CharacterListResponse = await request.getRequest('/characters/');
            this.commit('characters/SET_CHARACTERS', response.characters);
        },
        async delete({ commit }, payload: Character) {
            await request.deleteRequest('/characters/' + payload.id, []);
            commit('DELETE', payload);
        },
        async register() {
            const response: GetRedirectUrlResponse = await request.getRequest('/characters/auth/get-redirect-url/');
            /** @todo redirect action? */
            location.href = response.url;
        },
        async callback({ commit }, payload) {
            const response: CharacterResponse = await request.postRequest(
                '/characters/auth/callback/', { code: payload.code }
            );
            this.commit('ADD', response.character);
        },
    },
    mutations: {
        ADD(state: CharacterState, payload: Character) {
            if (null === state.characters) {
                state.characters = [];
            }
            state.characters.push(payload);
        },
        DELETE(state: CharacterState, payload: Character) {
            state.characters = state.characters.filter((item: Character) => {
                return item.id !== payload.id;
            });
        },
        SET_CHARACTERS(state: CharacterState, payload: Character[]) {
            state.characters = payload;
        },
    },
};

export default CharacterModule;
