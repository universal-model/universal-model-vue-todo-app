export interface Todo {
  name: string;
  isDone: boolean;
}

export default {
  todos: [
    { name: 'first todo', isDone: true },
    { name: 'second todo', isDone: false }
  ] as Todo[],
  shouldShowOnlyDoneTodos: false
};
