import Filter from '@/lib/Dto/Search/Filter';
import Result from '@/lib/Dto/Search/Result';

class SearchResponse {
  private _filters: Filter[] = [];
  private _results: Result[] = [];

  public get filters(): Filter[] {
    return this._filters;
  }

  public set filters(value: Filter[]) {
    this._filters = value;
  }

  public get results(): Result[] {
    return this._results;
  }

  public set results(value: Result[]) {
    this._results = value;
  }
}

export default SearchResponse;
