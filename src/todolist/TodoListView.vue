<template>
  <div>
    <input
      id="shouldShowOnlyDoneTodos"
      type="checkbox"
      :checked="todosState.shouldShowOnlyDoneTodos"
      @click="toggleShouldShowOnlyDoneTodos"
    />
    <label for="shouldShowOnlyDoneTodos">Show only done todos</label>
    <ul>
      <li v-for="todo in shownTodos">
        <input :id="todo.name" type="checkbox" :checked="todo.isDone" @click="toggleIsDoneTodo(todo)" />
        <label :for="todo.name">{{ todo.name }}</label>
        <button @click="removeTodo(todo)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store/store';
import toggleShouldShowOnlyDoneTodos from '@/todolist/model/actions/toggleShouldShowOnlyDoneTodos';
import removeTodo from '@/todolist/model/actions/removeTodo';
import toggleIsDoneTodo from '@/todolist/model/actions/toggleIsDoneTodo';
import { onMounted, onUnmounted } from 'vue';
import fetchTodos from '@/todolist/model/actions/fetchTodos';
import todoListController from '@/todolist/controller/todoListController';

export default {
  name: 'TodoListView',

  setup(): object {
    const [{ todosState }, { shownTodos }] = store.getStateAndSelectors();

    onMounted(() => {
      // noinspection JSIgnoredPromiseFromCall
      fetchTodos();
      document.addEventListener('keypress', todoListController.handleKeyPress);
    });

    onUnmounted(() => {
      document.removeEventListener('keypress', todoListController.handleKeyPress);
    });

    return {
      todosState,
      shownTodos,
      removeTodo,
      toggleShouldShowOnlyDoneTodos,
      toggleIsDoneTodo
    };
  }
};
</script>

<style scoped></style>
