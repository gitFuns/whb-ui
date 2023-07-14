<template>
  <svg fill="currentColor" :style="style">
    <use :xlink:href="`#whbui-icon-${name}`"></use>
  </svg>
</template>

<script>
import 'virtual:svg-icons-register';

export default {
  name: 'WhbIcon',
  props: {
    name: {
      type: String,
      required: true,
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
  computed: {
    style() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
};
</script>
