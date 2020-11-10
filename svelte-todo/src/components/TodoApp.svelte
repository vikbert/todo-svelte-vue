<script>
  import Logo from './Logo.svelte';

  import TodoService, { Todo } from '../services/TodoService';
  const service = new TodoService([new Todo('f'), new Todo('b')]);
  let todos = service.list();
  console.table(todos);
</script>

hello, world
