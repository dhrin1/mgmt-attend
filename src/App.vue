<template>
  <Header />
  <div class="container mx-auto px-3">
    <router-view />
  </div>
</template>

<script setup>
import Header from "@/components/common/Header.vue";
</script>
