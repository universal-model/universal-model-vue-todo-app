<template>
  <div>
    <HeaderView />
    <TodoListView />
  </div>
</template>

<script lang="ts">
import HeaderView from '@/header/view/HeaderView.vue';
import TodoListView from '@/todolist/view/TodoListView.vue';

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'App',
  components: { HeaderView, TodoListView }
};
</script>

<style scoped></style>
