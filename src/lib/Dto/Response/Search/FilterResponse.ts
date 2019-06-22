import Filter from '@/lib/Dto/Search/Filter';

class FilterResponse {
  private _filters: Filter[] = [];

  public get filters(): Filter[] {
    return this._filters;
  }

  public set filters(value: Filter[]) {
    this._filters = value;
  }
}

export default FilterResponse;
