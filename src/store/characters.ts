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
        async load({ commit }) {
            const response = await request.getRequest<CharacterListResponse>('/characters/');
            commit('SET_CHARACTERS', response.characters);
        },
        async delete({ commit }, payload: Character) {
            await request.deleteRequest('/characters/' + payload.id, []);
            commit('DELETE', payload);
        },
        async register() {
            const response = await request.getRequest<GetRedirectUrlResponse>('/characters/auth/get-redirect-url/');
            /** @todo redirect action? */
            location.href = response.url;
        },
        async callback({ commit }, payload) {
            const response = await request.postRequest<CharacterResponse>(
                '/characters/auth/callback/', { code: payload.code }
            );
            commit('ADD', response.character);
        },
    },
    mutations: {
        ADD(state: CharacterState, payload: Character) {
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
