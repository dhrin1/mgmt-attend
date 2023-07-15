<template>
  <div class="grid grid-cols-7 gap-2">
    <div class="col-span-2 h-[90vh] border-r-2">
      <Sidebar />
    </div>
    <div class="col-span-5">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/common/Sidebar.vue";
</script>
