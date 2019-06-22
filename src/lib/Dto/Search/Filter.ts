import Variant from '@/lib/Dto/Search/Variant';

class Filter {
  private _name: string = '';
  private _code: string = '';
  private _variants: Variant[] = [];

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

  public get variants(): Variant[] {
    return this._variants;
  }

  public set variants(value: Variant[]) {
    this._variants = value;
  }
}

export default Filter;
