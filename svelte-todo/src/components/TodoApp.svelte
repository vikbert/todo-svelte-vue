<script>
  import TodoService, { Todo } from '../services/TodoService';

  const service = new TodoService([
    new Todo('clean the room'),
    new Todo('programming'),
  ]);
  let todos = service.list();
  console.table(todos);
</script>

<section class="todoapp">
  <header class="header">
    <h1>todos svelte</h1>
    <input class="new-todo" placeholder="What needs to be done?" />
  </header>

  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" checked />
          <label>Taste JavaScript</label>
          <button class="destroy" />
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy a unicorn</label>
          <button class="destroy" />
        </div>
        <input class="edit" value="Rule the web" />
      </li>
    </ul>
  </section>

  <footer class="footer">
    <span class="todo-count"><strong>0</strong> item left</span>

    <ul class="filters">
      <li><a class="selected" href="#/">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>

    <button class="clear-completed">Clear completed</button>
  </footer>
</section>
