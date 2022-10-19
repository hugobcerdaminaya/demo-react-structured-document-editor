import Dexie, { Table } from 'dexie';
import { populate } from './populate';
import { Markdown } from './Markdown';

export class initDB extends Dexie {
  Markdowns!: Table<Markdown, number>;
  constructor() {
    super('initDB');
    this.version(1).stores({
      Markdowns: '++id',
    });
  }

  deleteMockup(MarkdownId: number) {
    return this.transaction('rw', this.Markdowns, () => {
      this.Markdowns.delete(MarkdownId);
    });
  }
}

export const db = new initDB();

db.on('populate', populate);

export function resetDatabase() {
  return db.transaction('rw', db.Markdowns,  async () => {
    await Promise.all(db.tables.map(table => table.clear()));
    await populate();
  });
}
