import store from '@/store/store';
import { Todo } from '@/todolist/model/state/initialTodoListState';

export default function removeTodo(todoToRemove: Todo): void {
  const { todosState } = store.getState();
  todosState.todos = todosState.todos.filter((todo: Todo) => todo !== todoToRemove);
}
