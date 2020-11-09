<template>
    <h1>hello, {{ message }}!</h1>
</template>

<script>
export default {
  name: 'TodoApp',
  props: {
    message: String
  }
}
</script>

<style>
h1 {
  color: purple;
  text-transform: capitalize;
}
</style>
