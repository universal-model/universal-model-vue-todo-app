<template>
  <div>
    <input
      id="shouldShowOnlyUnDoneTodos"
      type="checkbox"
      :checked="todosState.shouldShowOnlyUnDoneTodos"
      @click="toggleShouldShowOnlyUnDoneTodos"
    />
    <label for="shouldShowOnlyUnDoneTodos">Show only undone todos</label>
    <div v-if="todosState.isFetchingTodos">Fetching todos...</div>
    <div v-else-if="todosState.hasTodosFetchFailure">Failed to fetch todos</div>
    <ul v-else>
      <li v-for="todo in shownTodos">
        <input :id="todo.name" type="checkbox" :checked="todo.isDone" @click="toggleIsDoneTodo(todo)" />
        <label :for="todo.name">{{ userName }}: {{ todo.name }}</label>
        <button @click="removeTodo(todo)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import store from '@/store/store';
import toggleShouldShowOnlyUnDoneTodos from '@/todolist/model/actions/toggleShouldShowOnlyUnDoneTodos';
import removeTodo from '@/todolist/model/actions/removeTodo';
import toggleIsDoneTodo from '@/todolist/model/actions/toggleIsDoneTodo';
import { onMounted, onUnmounted } from 'vue';
import fetchTodos from '@/todolist/model/actions/fetchTodos';
import todoListController from '@/todolist/controller/todoListController';

export default {
  name: 'TodoListView',

  setup(): object {
    const [{ todosState }, { shownTodos, userName }] = store.getStateAndSelectors();

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
      userName,
      removeTodo,
      toggleShouldShowOnlyUnDoneTodos,
      toggleIsDoneTodo
    };
  }
};
</script>

<style scoped></style>
