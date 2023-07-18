<template>
  <header class="w-full bg-brown-primary">
    <div class="container mx-auto flex flex-wrap p-3">
      <div class="w-full flex justify-between items-center">
        <div class="flex space-x-4 items-center">
          <button @click="$router.push('/')">
            <div class="w-[13vh] filter saturate-100">
              <img
                src="@/assets/images/sprout-logo.png"
                class="w-full h-full"
              />
            </div>
          </button>
          <hr class="border-l h-9" />
          <h1 class="text-4xl font-light text-gray-300">HR</h1>
        </div>
        <nav class="flex justify-end items-center gap-x-1">
          <div class="md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              :class="{ 'text-gray-400': mobileMenuOpen }"
              aria-label="Toggle mobile menu"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div class="hidden md:flex gap-x-2 items-center">
            <div v-for="(item, idx) in links" :key="idx">
              <DropdownMenu
                :title="item.name"
                :items="item.child"
                custom-class="relative md:absolute"
              />
            </div>
            <div>
              <SearchBar placeholder="Search Employee..." />
            </div>
            <div>
              <UserAvatarDropdown :users="users" />
            </div>
          </div>
        </nav>
      </div>
      <div
        class="md:hidden"
        :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
      >
        <div v-for="(item, idx) in links" :key="idx">
          <DropdownMenu :title="item.name" :items="item.child" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import DropdownMenu from "@/components/shared/DropdownMenu.vue";
import avatar from "@/assets/images/avatar1.png";
import SearchBar from "../shared/SearchBar.vue";
import UserAvatarDropdown from "../users/UserAvatarDropdown.vue";
import { ref } from "vue";

const users = {
  name: "Alhdrin Gungon",
  designation: "Mid Frontend Developer",
  role: "Admin",
  imgSrc: avatar,
};

const links = [
  {
    name: "My Requests",
    child: [
      { name: "Request 1", path: "/attendance" },
      { name: "Request 2", path: "/" },
    ],
  },
  {
    name: "My Team",
    child: [
      { name: "Team 1", path: "/" },
      { name: "Team 2", path: "/" },
    ],
  },
  {
    name: "Company",
    child: [
      { name: "Company 1", path: "/" },
      { name: "Company 2", path: "/" },
    ],
  },
  {
    name: "Administrative Tool",
    child: [
      { name: "Tool 1", path: "/" },
      { name: "Tool 2", path: "/" },
    ],
  },
  {
    name: "Maintenance",
    child: [
      { name: "Maintain 1", path: "/" },
      { name: "Maintain 2", path: "/" },
    ],
  },
];
const mobileMenuOpen = ref(false);
</script>
