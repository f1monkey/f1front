import Character from '../../Character';

class CharacterResponse {
    private _character!: Character;

    public get character(): Character {
        return this._character;
    }
    public set character(value: Character) {
        this._character = value;
    }
}

export default CharacterResponse;
