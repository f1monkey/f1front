class MarketGroup {
  private _id!: number;
  private _parentId: number | undefined;
  private _name!: string;
  private _iconId: number | undefined;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get parentId(): number | undefined {
    return this._parentId;
  }

  public set parentId(value: number | undefined) {
    this._parentId = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get iconId(): number | undefined {
    return this._iconId;
  }

  public set iconId(value: number | undefined) {
    this._iconId = value;
  }
}

export default MarketGroup;
