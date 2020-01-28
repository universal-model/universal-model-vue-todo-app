<template>
  <div>
    <h1>{{ headerText }}</h1>
    <label for="userName">User name:</label>
    <input id="userName" @change="({ target: { value } }) => changeUserName(value)" />
  </div>
</template>

<script lang="ts">
import store from '@/store/store';
import changeUserName from '@/header/model/actions/changeUserName';

export default {
  name: 'HeaderView',

  setup(): object {
    const { headerText } = store.getSelectors();

    return {
      headerText,
      changeUserName
    };
  }
};
</script>

<style scoped></style>
