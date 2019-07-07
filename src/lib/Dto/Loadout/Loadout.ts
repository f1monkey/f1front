class Loadout {
  private _id: string = '';
  private _shipId: string = '';
  private _name: string = '';
  private _description: string = '';

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get shipId(): string {
    return this._shipId;
  }

  public set shipId(value: string) {
    this._shipId = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}

export default Loadout;
