<script setup>
import DropdownMenu from "@/components/shared/DropdownMenu.vue";
import SearchBar from "../shared/SearchBar.vue";
import UserAvatarDropdown from "../users/UserAvatarDropdown.vue";

const users = {
  name: "Alhdrin Gungon",
  designation: "Mid Frontend Developer",
  role: "Admin",
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
</script>

<template>
  <header class="w-full bg-brown-primary">
    <div class="container mx-auto flex flex-wrap p-3">
      <div class="w-full flex justify-between items-center">
        <div class="flex space-x-4 items-center">
          <button
            @click="$router.push('/')"
            class="relative border-gray-300 divide-x divide-gray-300"
          >
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
          <div v-for="(item, idx) in links" :key="idx">
            <DropdownMenu :title="item.name" :items="item.child" />
          </div>
          <div>
            <SearchBar placeholder="Search Employee..." />
          </div>
          <div>
            <UserAvatarDropdown :users="users" />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
