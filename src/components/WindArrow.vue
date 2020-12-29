<template>
  <div class="wind-arrow" :style="`transform: rotate(${deg}deg)`">
    ↑
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'WindArrow',
  props: {
    deg: {
      type: Number,
      required: true,
      validator(value: number): boolean {
        return value >=0 && value <= 360
      }
    },
  },
});
</script>

<style lang="less">
.wind-arrow {
  display: inline-block;
}
</style>
