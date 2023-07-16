<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
defineProps({
  title: String,
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="">
    <Menu as="div" class="relative inline-block text-left z-10">
      <div>
        <MenuButton
          class="inline-flex items-center w-full justify-center bg-opacity-20 p-3 text-sm font-medium text-gray-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {{ title }}<i class="fa-solid fa-caret-down ml-2"></i>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 p-1 origin-top-right rounded-lg bg-white shadow-lg ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1" v-for="item in items" :key="item.name">
            <MenuItem v-slot="{ active }">
              <router-link
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                  'group flex w-full items-center rounded-lg px-2 py-2 text-sm',
                ]"
                :to="item.path"
                >{{ item.name }}</router-link
              >
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
