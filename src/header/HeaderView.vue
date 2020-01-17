<template>
  <div>
    <h1>{{ headerState.userName }}</h1>
    <label>User name:</label>
    <input @change="({ target: { value } }) => changeUserName(value)" />
  </div>
</template>

<script lang="ts">
import store from '@/store/store';
import changeUserName from '@/header/model/actions/changeUserName';

export default {
  name: 'HeaderView',

  setup(): object {
    const [{ headerState }] = store.getStateAndSelectors();

    return {
      headerState,
      changeUserName
    };
  }
};
</script>

<style scoped></style>
