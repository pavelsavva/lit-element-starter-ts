import {LitElement, html, css} from 'lit';
import {customElement, state, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {classMap} from 'lit/directives/class-map.js';


class DB {
  name: string;
  version: number;
  db: IDBDatabase | null;

  constructor(name: string, version: number) {
    this.name = name;
    this.version = version;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.name, this.version);

      request.onupgradeneeded = (event) => {
        // @ts-ignore
        this.db = event.target?.result;
        if (!this.db?.objectStoreNames.contains('todos')) {
          this.db?.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = (event: any) => {
        this.db = event.target?.result;
        resolve('Database opened successfully');
      };

      request.onerror = (event: any) => {
        console.error('IndexedDB error:', event.target?.errorCode);
        reject(event.target?.errorCode);
      };
    });
  }

  async getTodos(): Promise<{ text: string, completed: boolean }[]>{
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
      } else {
        const transaction = this.db.transaction(['todos'], 'readonly');
        const objectStore = transaction.objectStore('todos');
        const request = objectStore.getAll();

        request.onsuccess = () => {
          resolve(request.result);
        };

        request.onerror = () => {
          reject(request.error);
        };
      }
    });
  }

  async addTodos(todos: { text: string, completed: boolean }[]) {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
      } else {
        const transaction = this.db.transaction(['todos'], 'readwrite');
        const objectStore = transaction.objectStore('todos');
        objectStore.clear(); // Clear existing todos before adding new ones
        todos.forEach(todo => {
          objectStore.add(todo);
        });

        transaction.oncomplete = () => {
          resolve('Todos added successfully');
        };

        transaction.onerror = () => {
          reject(transaction.error);
        };
      }
    });
  }

  async clearTodos() {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject('Database not initialized');
      } else {
        const transaction = this.db.transaction(['todos'], 'readwrite');
        const objectStore = transaction.objectStore('todos');
        const request = objectStore.clear();

        request.onsuccess = () => {
          resolve('Todos cleared successfully');
        };

        request.onerror = () => {
          reject(request.error);
        };
      }
    });
  }
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
      :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border: solid 1px #000;
          padding: 16px;
          max-width: 400px;
          margin: 0 auto;
          border-radius: 10px;
          font-family: sans-serif;

          --primary-color: #6200ee;
          --secondary-color: #03dac6;
          --text-color: #121212;
          --destructive-color: #b00020;
          --destructive-color-light: #ff1744;
          --destructive-color-dark: #8e0000;
      }

      button {
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background-color 0.3s, color 0.3s;

          background-color: var(--primary-color);
          color: white;
      }

      button.destructive {
          background-color: var(--destructive-color);
          color: white;
      }

      button.destructive:hover {
          background-color: var(--destructive-color-dark);
      }

      button.destructive:active {
          background-color: var(--destructive-color);
      }

      #clear {
          width: 100%;
      }

      .add-todo-group {
          display: flex;
          gap: 8px;
          width: 100%;
      }

      #todo {
          flex: 1;
      }

      input {
          padding: 8px;
          border-radius: 5px;
          border: 1px solid #000;
      }

      h1 {
          padding: 0;
          margin: 0 0 16px;
      }
      
      .todos-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          align-items: flex-start;
          width: 100%;
      }
      
      .no-todos-message {
          color: #8292a2;
          width: 100%;
          text-align: left;
          padding: 0;
          margin: 0;
      }
      
      .todo-item {
          display: flex;
          gap: 8px;
          align-items: center;
          cursor: pointer;
      }
      
      li.completed {
          text-decoration: line-through;
          color: #8292a2;
      }
  `;

  override render() {
    return html`
      <h1>
        Today's todos
      </h1>
      ${this._getTodosBlock()}

      <form class="add-todo-group" @submit=${this._addTodo}>
        <input type="text" id="todo" placeholder="Enter a new todo" />
        <button id="add" @click=${this._addTodo}>
          Add todo
        </button>
      </form>
      <button class="destructive" id="clear" @click=${this._clearTodos}>
        Clear todos
      </button>
    `;
  }

  @query('#todo')
  // @ts-ignore
  private todoInput: HTMLInputElement;

  @state()
  private todos: { text: string, completed: boolean }[] = [];

  private async _addTodo(e: Event) {
    e.preventDefault();
    const todo = this.todoInput.value;
    if (todo) {
      this.todos = [...this.todos, { text: todo, completed: false }];
      this.todoInput.value = '';
    }

    await this.db.addTodos(this.todos);
  }

  private _getTodosBlock() {
    if (this.loading) {
      return html`<p>Loading...</p>`;
    }

    if (this.todos.length === 0) {
      return html`<p class="no-todos-message">No todos yet</p>`;
    }

    return html`
      <ul class="todos-list">
        ${map(this.todos, 
          (todo, index) => html`
            <div class="todo-item" @click=${() => this._checkTodoItem(index)}>
              <input type="checkbox" id="todo-${index}" ?checked=${todo.completed}/>
              <li class=${classMap({completed: todo.completed})}>${index + 1}. ${todo.text}</li>
            </div>
          `
        )}
      </ul>
    `;
  }

  private async _checkTodoItem(index: number) {
    this.todos = this.todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    await this.db.addTodos(this.todos);
  }

  private async _clearTodos() {
    this.todos = [];

    await this.db.clearTodos()
  }

  private db;

  constructor() {
    super();
    this.db = new DB('todoDB', 1); // Initialize the database
    this.initDB();
  }

  @state()
  private loading = true;

  async initDB() {
    await this.db.init();
    const todos = await this.db.getTodos();
    this.todos = todos.map(todo => ({ text: todo.text, completed: todo.completed }));
    this.loading = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}

