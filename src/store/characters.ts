import { RootState } from '@/store';
import { Module } from 'vuex';
import * as request from '@/lib/Request';
import GetRedirectUrlResponse from '@/lib/Dto/Response/Character/GetRedirectUrlResponse';
import CharacterListResponse from '@/lib/Dto/Response/Character/CharacterListResponse';
import Character from '@/lib/Dto/Character';
import CharacterResponse from '@/lib/Dto/Response/Character/ChracterResponse';

export interface CharacterState {
    characters: Character[] | null;
}

const CharacterModule: Module<CharacterState, RootState> = {
    namespaced: true,
    actions: {
        async load({ commit, state }) {
            const response: CharacterListResponse = await request.get('/characters/');
            this.commit('characters/setCharacters', response.characters);
        },
        async register() {
            const response: GetRedirectUrlResponse = await request.get('/characters/auth/get-redirect-url/');
            /** @todo redirect action? */
            location.href = response.url;
        },
        async callback({ commit }, payload) {
            const response: CharacterResponse = await request.post(
                '/characters/auth/callback/', { code: payload.code }
            );
            this.commit('characters/addCharacter', response.character);
        }
    },
    mutations: {
        addCharacter(state: CharacterState, payload: Character) {
            if (null === state.characters) {
                state.characters = [];
            }
            state.characters.push(payload);
        },
        setCharacters(state: CharacterState, payload: Character[]) {
            state.characters = payload;
        },
    },
};

export default CharacterModule;
