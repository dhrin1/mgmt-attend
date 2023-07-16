<script setup>
defineProps({
  onChange: Function,
  customClass: String,
  disabled: Boolean,
  label: String,
  type: String,
  name: String,
  value: String,
});
</script>
<template>
  <div class="relative border border-gray-primary rounded-md">
    <label
      class="absolute text-xs -top-3 left-3 bg-white text-gray-secondary p-1"
      >{{ label }}</label
    >
    <input
      :type="type"
      @change="onChange"
      :v-model="value"
      :name="name"
      :class="`p-[10px] pl-3 w-full bg-transparent ring-0 focus:outline-none rounded flex gap-x-2 justify-center items-center ${customClass} ${
        disabled ? 'opacity-25' : ''
      }`"
    />
  </div>
</template>
