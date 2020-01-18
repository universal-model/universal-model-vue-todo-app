import { Todo } from '@/todolist/model/state/initialTodoListState';

export interface ITodoService {
  fetchTodos(): Promise<Todo[]>;
}
