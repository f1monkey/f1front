import Character from '../../Character';

class CharacterListResponse {
    private _characters: Character[] = [];

    public get characters(): Character[] {
        return this._characters;
    }
    public set characters(value: Character[]) {
        this._characters = value;
    }
}

export default CharacterListResponse;
