import { getStateAndSelectors } from 'universal-model-vue';
import store from '../../../store/store';

export default function changeUserName(newUserName: string): void {
  const [{ headerState }] = getStateAndSelectors(store);
  headerState.userName = newUserName;
}
