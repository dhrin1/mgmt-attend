<script setup>
defineProps({
  noDataProp: {
    type: Object,
    required: false,
  },
});
</script>
<template>
  <div class="w-full h-full rounded-md border relative">
    <div class="flex justify-center items-center h-full w-full">
      <div class="inline-block text-center">
        <div class="relative flex justify-center">
          <img src="@/assets/images/nopayslip.png" class="text-center w-32" />
        </div>
        <h2 class="font-semibold text-2xl">{{ noDataProp.title }}</h2>
        <p class="text-sm font-light">{{ noDataProp.msg }}</p>
      </div>
    </div>
    <div class="bottom-0 absolute border-t p-4 w-full">
      <div class="flex justify-between">
        <div class="inline-flex space-x-2 text-xs items-center">
          <label>Items per page</label>
          <select>
            <option v-for="item of 10">{{ item * 10 }}</option>
          </select>
        </div>
        <div class="inline-flex space-x-2 text-xs items-center">
          <label>Page</label>
          <input type="text" class="w-6 text-center" value="1" />
        </div>
        <div class="text-xs">
          <label>Showing of 0 of 0</label>
        </div>
      </div>
    </div>
  </div>
</template>
