import store from '@/store/store';
import { Todo } from '@/todolist/model/state/initialTodoListState';

export default function removeTodo(todoToRemove: Todo): void {
  const [{ todosState }] = store.getStateAndSelectors();

  // todosState.todos = todosState.todos.filter((todo: Todo) => todo !== todoToRemove);

  store.patchState({
    todosState: {
      ...todosState,
      todos: todosState.todos.filter((todo: Todo) => todo !== todoToRemove)
    }
  });
}
