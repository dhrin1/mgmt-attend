<script setup>
import DropdownMenu from "@/components/shared/DropdownMenu.vue";
defineProps({
  users: {
    type: Object,
  },
});
</script>
<template>
  <div class="inline-flex items-center ml-2">
    <div class="w-8 h-8">
      <img
        :src="users.imgSrc"
        class="w-full h-full object-cover rounded-full"
      />
    </div>
    <div>
      <DropdownMenu
        :title="users.role"
        :items="[
          { name: 'Profile', path: '/' },
          { name: 'Settings', path: '/' },
          { name: 'Logout', path: '/' },
        ]"
        custom-class="relative md:absolute"
      />
    </div>
  </div>
</template>
