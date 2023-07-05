<template>
  <component :is="iconComponent" class="svg-icon" v-bind="$attrs" />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'WhbIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconComponent() {
      return defineAsyncComponent(() => import(`./svg/${this.name}.svg`));
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  outline: none;
  fill: currentColor;
  stroke-width: 0;
}
</style>
