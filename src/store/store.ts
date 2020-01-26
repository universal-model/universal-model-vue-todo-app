import { combineSelectors, createStore } from 'universal-model-vue';
import initialHeaderState from '@/header/model/state/initialHeaderState';
import initialTodoListState from '@/todolist/model/state/initialTodoListState';
import createTodoListStateSelectors from '@/todolist/model/state/createTodoListStateSelectors';
import createHeaderStateSelectors from '@/header/model/state/createHeaderStateSelectors';

const initialState = {
  headerState: initialHeaderState,
  todosState: initialTodoListState
};

export type State = typeof initialState;

const selectors = combineSelectors([
  createTodoListStateSelectors<State>(),
  createHeaderStateSelectors<State>()
]);

export default createStore(initialState, selectors);
