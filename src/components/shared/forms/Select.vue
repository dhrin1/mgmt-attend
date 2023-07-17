<script setup>
defineProps({
  onChange: Function,
  customClass: String,
  disabled: Boolean,
  label: String,
  name: String,
  value: String,
  defaultVal: String,
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="relative border border-gray-primary rounded-md pr-2">
    <label
      class="absolute text-xs -top-3 left-3 bg-white text-gray-secondary p-1"
      >{{ label }}</label
    >
    <select
      @change="onChange"
      :v-model="value"
      :name="name"
      :disabled="disabled"
      :class="`p-3 w-full bg-transparent ring-0 focus:outline-none rounded flex gap-x-2 justify-center items-center ${customClass} ${
        disabled ? 'opacity-25' : ''
      }`"
    >
      <option selected value="">{{ defaultVal }}</option>
      <option
        v-for="item of items"
        :value="item.value"
        :selected="item.value === value"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
