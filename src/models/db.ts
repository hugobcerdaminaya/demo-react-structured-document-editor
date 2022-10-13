import Dexie, { Table } from 'dexie';
import { populate } from './populate';
import { TodoList } from './TodoList';

export class TodoDB extends Dexie {
  todoLists!: Table<TodoList, number>;
  constructor() {
    super('TodoDB');
    this.version(1).stores({
      todoLists: '++id',
    });
  }

  deleteList(todoListId: number) {
    return this.transaction('rw', this.todoLists, () => {
      this.todoLists.delete(todoListId);
    });
  }
}

export const db = new TodoDB();

db.on('populate', populate);

export function resetDatabase() {
  return db.transaction('rw', db.todoLists,  async () => {
    await Promise.all(db.tables.map(table => table.clear()));
    await populate();
  });
}
