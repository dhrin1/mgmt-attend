<template>
  <div class="grid md:grid-cols-5 lg:grid-cols-8">
    <div class="col-span-2 md:h-[90vh] md:border-r border-gray-400">
      <Sidebar />
    </div>
    <div class="col-span-6">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/common/Sidebar.vue";
</script>
