class Variant {
  private _name: string = '';
  private _checked: boolean = false;
  private _code: string = '';

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get code(): string {
    return this._code;
  }

  public set code(value: string) {
    this._code = value;
  }

  public get checked(): boolean {
    return this._checked;
  }

  public set checked(value: boolean) {
    this._checked = value;
  }
}

export default Variant;
