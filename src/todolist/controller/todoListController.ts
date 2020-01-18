import addTodo from "@/todolist/model/actions/addTodo";
import removeAllTodos from "@/todolist/model/actions/removeAllTodos";

export default {
  handleKeyPress(keyboardEvent: KeyboardEvent): void {
    if (keyboardEvent.code === 'KeyA') {
      addTodo();
    } else if (keyboardEvent.code === 'KeyR') {
      removeAllTodos();
    }
  }
};
