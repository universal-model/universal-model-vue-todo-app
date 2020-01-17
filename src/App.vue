<template>
  <div>
    <HeaderView />
    <TodoListView />
  </div>
</template>

<script lang="ts">
import HeaderView from '@/header/HeaderView.vue';
import TodoListView from '@/todolist/TodoListView.vue';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'App',
  components: { HeaderView, TodoListView }
};
</script>

<style scoped></style>
