import AbstractDb from '@/lib/Db/AbstractDb';
import { IDBPDatabase, IDBPTransaction } from 'idb';
import * as request from '@/lib/Request';
import Item from '@/lib/Dto/Sde/Item';
import MarketGroup from '@/lib/Dto/Sde/MarketGroup';

const MARKET_GROUPS_STORE_NAME = 'market-groups';
const ITEMS_STORE_NAME = 'items';

const MARKET_GROUPS_DUMP_FILE = '/sde/marketGroups_%version%.json';
const ITEMS_DUMP_FILE = '/sde/items_%version%.json';

class SdeDb extends AbstractDb {
  protected _needUpdate: boolean = false;

  protected async createStores(
    database: IDBPDatabase<DBTypes>,
    oldVersion: number,
    newVersion: number | null,
    transaction: IDBPTransaction<DBTypes>
  ): Promise<void> {
    await database.createObjectStore(MARKET_GROUPS_STORE_NAME, { keyPath: 'id' });
    await database.createObjectStore(ITEMS_STORE_NAME, { keyPath: 'id' });
  }

  protected async update(): Promise<void> {
    await this.loadData(MARKET_GROUPS_DUMP_FILE, MARKET_GROUPS_STORE_NAME);
    await this.loadData(ITEMS_DUMP_FILE, ITEMS_STORE_NAME);
  }

  protected async loadData(fileUrl: string, storeName: string) {
    const data = await request.getRequest<Item[]>(this.makeFileUrl(fileUrl));
    const transaction = this.db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    data.forEach((item) => {
      store.put(item);
    });

    await transaction.done;
  }

  protected getDbName() {
    return 'sde';
  }

  protected makeFileUrl(fileUrl: string) {
    return fileUrl.replace('%version%', this.getVersion());
  }
}

export default new SdeDb();
