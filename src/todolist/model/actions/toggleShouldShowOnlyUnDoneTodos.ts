import store from '@/store/store';

export default function toggleShouldShowOnlyUnDoneTodos(): void {
  const [{ todosState }] = store.getStateAndSelectors();
  todosState.shouldShowOnlyUnDoneTodos = !todosState.shouldShowOnlyUnDoneTodos;
}
