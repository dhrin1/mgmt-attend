<script setup>
defineProps({
  onClick: Function,
  customClass: String,
  disabled: Boolean,
});
</script>
<template>
  <button
    @click="onClick"
    :disabled="disabled"
    :class="`p-3 rounded flex gap-x-2 justify-center items-center ${customClass} ${
      disabled ? 'opacity-25' : ''
    }`"
  >
    <slot></slot>
  </button>
</template>
