<script>
import TodoApp from './components/TodoApp.vue';
import Logo from './components/Logo.vue';

export default {
  name: 'App',
  components: {
    TodoApp,
    Logo,
  },
};
</script>

<template>
  <logo />
  <TodoApp />
</template>