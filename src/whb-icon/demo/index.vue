<template>
  <demo-block title="error">
    <whb-icon name="error" width="32" height="32" color="#c44749" />
  </demo-block>

  <demo-block title="tick">
    <whb-icon name="tick" width="32" height="32" color="#1a8f5c" />
  </demo-block>

  <demo-block title="close">
    <whb-icon name="close" width="32" height="32" color="#131316" />
  </demo-block>
</template>

<script setup>
import WhbIcon from '../index.vue';
</script>

<style lang="scss">
svg {
  margin-left: 16px;
}
</style>
