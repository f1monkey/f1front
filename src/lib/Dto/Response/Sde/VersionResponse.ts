class VersionResponse {
  private _version!: number;

  public get version(): number {
    return this._version;
  }

  public set version(value: number) {
    this._version = value;
  }
}

export default VersionResponse;
