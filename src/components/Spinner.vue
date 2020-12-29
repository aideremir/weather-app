<template>
  <div class="spinner">
    <img src="../assets/spinner.svg" alt="loading..." />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Spinner',
});
</script>

<style lang="less">
.spinner {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
}
</style>
