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
        <input :id="todo.name" type="checkbox" :checked="todo.isDone" />
        <label :for="todo.name">{{ todo.name }}</label>
        <button @click="removeTodo(todo)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getStateAndSelectors } from 'universal-model-vue';
import store from '@/store/store';
import toggleShouldShowOnlyDoneTodos from '@/todolist/model/actions/toggleShouldShowOnlyDoneTodos';
import removeTodo from '@/todolist/model/actions/removeTodo';

export default {
  name: 'TodoListView',

  setup(): object {
    const [{ todosState }, { shownTodos }] = getStateAndSelectors(store);

    return {
      todosState,
      shownTodos,
      removeTodo,
      toggleShouldShowOnlyDoneTodos
    };
  }
};
</script>

<style scoped></style>
