import store from '@/store/store';

export default function toggleShouldShowOnlyDoneTodos(): void {
  const [{ todosState }] = store.getStateAndSelectors();
  todosState.shouldShowOnlyDoneTodos = !todosState.shouldShowOnlyDoneTodos;
}
