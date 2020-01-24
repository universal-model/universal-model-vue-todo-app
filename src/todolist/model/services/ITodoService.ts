import { Todo } from '@/todolist/model/state/initialTodoListState';

export interface ITodoService {
  tryFetchTodos(): Promise<Todo[]>;
}
