<template>
  <div class="error-message">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ErrorMessage',
  props: {
    message: String,
  },
});
</script>

<style lang="less">
.error-message {
  color: red;
}
</style>
