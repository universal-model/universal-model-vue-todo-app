import { State } from '@/store/store';
import { Todo } from '@/todolist/model/state/initialTodoListState';

const createTodoListStateSelectors = <T extends State>() => ({
  shownTodos: (state: T) =>
    state.todosState.todos.filter(
      (todo: Todo) =>
        (state.todosState.shouldShowOnlyDoneTodos && todo.isDone) || !state.todosState.shouldShowOnlyDoneTodos
    )
});

export default createTodoListStateSelectors;
