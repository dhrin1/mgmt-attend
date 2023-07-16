<script setup>
defineProps({
  placeholder: String,
});
</script>
<template>
  <div
    class="relative border border-gray-primary flex items-center p-1 rounded-md"
  >
    <i
      class="fa-solid fa-magnifying-glass absolute right-0 text-gray-primary mr-2"
    ></i>
    <input
      type="text"
      class="bg-brown-primary pr-6 pl-1 py-[3px] ring-0 text-sm focus:outline-none text-white placeholder:text-gray-primary"
      :placeholder="placeholder"
    />
  </div>
</template>
