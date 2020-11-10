export class Todo {
  constructor(title, id) {
    this.title = title;
    this.completed = false;
    this.id = id ? id : Math.random().toString(36).substr(2, 9);
  }
}

class TodoService {
  constructor(initTodos) {
    this.todos = initTodos;
  }

  list() {
    return this.todos;
  }

  count() {
    return this.todos.length;
  }

  add(newTodo) {
    this.todos = [newTodo, ...this.todos];
  }

  delete(targetId) {
    this.todos = this.todos.filter((item) => {
      return item.id !== targetId;
    });
  }

  complete(targetId) {
    this.todos.map((item) => {
      if (item.id === targetId) {
        item.completed = true;
      }
    });
  }

  clearCompleted() {
    this.todos = this.todos.filter((item) => {
      return !item.completed;
    });
  }

  getActive() {
    return this.todos.filter((item) => {
      return !item.completed;
    });
  }

  getCompleted() {
    return this.todos.filter((item) => {
      return item.completed;
    });
  }
}

export default TodoService;
