<template>
  <div class="grid md:grid-cols-5 lg:grid-cols-8 gap-2">
    <div class="col-span-2 h-[90vh] border-r">
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
