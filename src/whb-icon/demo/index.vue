<template>
  <demo-block title="check-circle">
    <whb-icon name="check-circle" width="32" height="32" color="#1a8f5c" />
  </demo-block>

  <demo-block title="management">
    <whb-icon name="management" width="32" height="32" color="#e59940" />
  </demo-block>

  <demo-block title="member">
    <whb-icon name="member" width="32" height="32" color="#c44749" />
  </demo-block>

  <demo-block title="close">
    <whb-icon name="close" width="32" height="32" color="#131313" />
  </demo-block>

  <demo-block title="eye">
    <whb-icon name="eye" width="32" height="32" color="#529b2e" />
  </demo-block>
</template>

<script setup>
import WhbIcon from '../index.vue';
</script>

<style lang="scss">
.demo-nav__back {
  left: 0;
}

svg {
  margin-left: 16px;
}
</style>
