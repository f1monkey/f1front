class Item {
  private _id!: number;
  private _groupId!: number;
  private _name!: string;
  private _mass!: number;
  private _volume!: number;
  private _capacity!: number;
  private _marketGroupId!: number;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get groupId(): number {
    return this._groupId;
  }

  public set groupId(value: number) {
    this._groupId = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get mass(): number {
    return this._mass;
  }

  public set mass(value: number) {
    this._mass = value;
  }

  public get volume(): number {
    return this._volume;
  }

  public set volume(value: number) {
    this._volume = value;
  }

  public get capacity(): number {
    return this._capacity;
  }

  public set capacity(value: number) {
    this._capacity = value;
  }

  public get marketGroupId(): number {
    return this._marketGroupId;
  }

  public set marketGroupId(value: number) {
    this._marketGroupId = value;
  }
}

export default Item;
