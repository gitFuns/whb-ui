<template>
  <component :is="iconComponent" class="svg-icon" v-bind="$attrs" />
</template>
<script setup>
import { computed, defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const iconComponent = computed(() => defineAsyncComponent(() => import(`./svg/${props.name}.svg`)));
</script>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  outline: none;
  fill: currentColor;
  stroke-width: 0;
}
</style>
