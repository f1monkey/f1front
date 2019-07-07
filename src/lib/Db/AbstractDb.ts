import { openDB, IDBPDatabase, IDBPTransaction } from 'idb';
import * as request from '@/lib/Request';
import VersionResponse from '../Dto/Response/Sde/VersionResponse';

let version: number;

abstract class AbstractDb {
  protected db!: IDBPDatabase<DBTypes>;
  protected _needUpdate: boolean = false;

  public async load() {
    if (undefined === version) {
      version = await this.getDbVersion();
    }
    this.db = await openDB(
      this.getDbName(),
      version,
      {
        upgrade: async (db, oldVersion, newVersion, transaction) => {
          if (db.objectStoreNames.length) {
            for (const name of db.objectStoreNames) {
              await db.deleteObjectStore(name);
            }
          }
          await this.createStores(db, oldVersion, newVersion, transaction);
          this._needUpdate = true;
        },
      }
    );

    if (this.needUpdate) {
      this.update();
    }
  }

  protected getVersion(): string {
    return '' + version;
  }

  protected get needUpdate(): boolean {
    return this._needUpdate;
  }

  protected async getDbVersion(): Promise<number> {
    const response = await request.getRequest<VersionResponse>('/sde/version/');

    return response.version;
  }

  protected abstract async createStores(
    database: IDBPDatabase<DBTypes>,
    oldVersion: number,
    newVersion: number | null,
    transaction: IDBPTransaction<DBTypes>
  ): Promise<void>;

  protected abstract getDbName(): string;

  protected abstract async update(): Promise<void>;

}

export default AbstractDb;
