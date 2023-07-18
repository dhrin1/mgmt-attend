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
    <div class="flex justify-center items-center h-full w-full p-5">
      <div class="inline-block text-center">
        <div class="relative flex justify-center">
          <img src="@/assets/images/nopayslip.png" class="text-center w-32" />
        </div>
        <h2 class="font-semibold text-2xl leading-6">{{ noDataProp.title }}</h2>
        <p class="text-sm font-light">{{ noDataProp.msg }}</p>
      </div>
    </div>
    <div class="bottom-0 absolute border-t p-2 md:p-4 w-full">
      <div class="md:flex md:justify-between text-gray-700 space-x-2">
        <div class="inline-flex space-x-2 text-xs items-center">
          <label>Items per page</label>
          <select class="border rounded">
            <option v-for="item of 10">{{ item * 10 }}</option>
          </select>
        </div>
        <div class="inline-flex space-x-2 text-xs items-center">
          <span
            ><button><i class="fa-solid fa-backward-step"></i></button
          ></span>
          <span
            ><button><i class="fa-solid fa-caret-left"></i></button
          ></span>
          <label>Page</label>
          <input
            type="text"
            class="w-6 text-center border rounded"
            value="1"
            disabled
          />
          <label>of</label>
          <label>1</label>
          <span
            ><button><i class="fa-solid fa-caret-right"></i></button
          ></span>
          <span
            ><button><i class="fa-solid fa-forward-step"></i></button
          ></span>
        </div>
        <div class="text-xs">
          <label>Showing of 0 of 0</label>
        </div>
      </div>
    </div>
  </div>
</template>
