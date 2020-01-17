import { getStateAndSelectors } from 'universal-model-vue';
import store from '@/store/store';

export default function toggleShouldShowOnlyDoneTodos(): void {
  const [{ todosState }] = getStateAndSelectors(store);
  todosState.shouldShowOnlyDoneTodos = !todosState.shouldShowOnlyDoneTodos;
}
