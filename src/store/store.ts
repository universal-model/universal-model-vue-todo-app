import { createStore } from 'universal-model-vue';
import initialHeaderState from '@/header/model/state/initialHeaderState';
import initialTodoListState from '@/todolist/model/state/initialTodoListState';
import createTodoListStateSelectors from '@/todolist/model/state/createTodoListStateSelectors';

const initialState = {
  headerState: initialHeaderState,
  todosState: initialTodoListState
};

export type State = typeof initialState;

const selectors = {
  ...createTodoListStateSelectors<State>()
};

export default createStore(initialState, selectors);
