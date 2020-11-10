<template>
  <logo/>
  <TodoApp message="Vue 3"/>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    TodoApp,
    Logo,
  }
}
</script>