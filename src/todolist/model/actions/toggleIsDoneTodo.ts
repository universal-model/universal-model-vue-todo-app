import { Todo } from '@/todolist/model/state/initialTodoListState';

export default function toggleIsDoneTodo(todo: Todo): void {
  todo.isDone = !todo.isDone;
}
