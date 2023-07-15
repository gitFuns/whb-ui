<template>
  <svg fill="currentColor" class="whb-icon" :color="color" :width="width" :height="height">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './icon-font.js';

export default {
  name: 'WhbIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#131313',
    },
    width: {
      type: [Number, String],
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
  },
};
</script>

<style lang="scss">
.whb-icon {
  fill: currentColor;
  overflow: hidden;
}
</style>
