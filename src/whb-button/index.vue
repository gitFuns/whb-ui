<template>
  <button class="button" :class="props.type" @click="emit('click')">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: String
})

const emit = defineEmits(['click'])
</script>

<style lang="scss">
.button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 40px;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  outline: 0;
  font-weight: 400;
  user-select: none;
  vertical-align: middle;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background: #131316;
  border: 1px solid #131316;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  &:hover {
    background: #2b2b2e;
    border: 1px solid #2b2b2e;
  }
  &.success {
    border-color: #1a8f5c;
    background: #1a8f5c;
    &:hover {
      border-color: #106f44;
      background: #106f44;
    }
  }
  &.info {
    color: #131316;
    background: #f2f2f2;
    border-color: #f2f2f2;
    &:hover {
      background: #e3e3e3;
      border-color: #e3e3e3;
    }
  }
  &.danger {
    color: #fff;
    background: #c44749;
    border-color: #c44749;
    &:hover {
      background: #9a2c2e;
      border-color: #9a2c2e;
    }
  }
  &.link {
    color: #1a8f5c;
    border: none;
    border-radius: 0;
    background: transparent;
    &:hover {
      color: #106f44;
    }
  }
}
</style>
