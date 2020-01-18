import { ITodoService } from '@/todolist/model/services/ITodoService';
import { Todo } from '@/todolist/model/state/initialTodoListState';
import Constants from "@/Constants";

export default class FakeTodoService implements ITodoService {
  fetchTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve: (todo: Todo[]) => void) => {
      setTimeout(() => resolve([
        { name: 'first todo', isDone: true },
        { name: 'second todo', isDone: false }
      ]), Constants.FAKE_SERVICE_LATENCY_IN_MILLIS);
    });
  }
}
