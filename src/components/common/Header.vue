<script setup>
import DropdownMenu from "@/components/shared/DropdownMenu.vue";
import SearchBar from "../shared/SearchBar.vue";
import UserAvatarDropdown from "../users/UserAvatarDropdown.vue";

const users = {
  name: "Alhdrin Gungon",
  designation: "Mid Frontend Developer",
  role: "Admin",
};
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
            <div class="w-[15vh] filter saturate-100">
              <img
                src="@/assets/images/sprout-logo.png"
                class="w-full h-full"
              />
            </div>
          </button>
          <h1 class="text-5xl font-light text-gray-300">HR</h1>
        </div>
        <nav class="flex justify-end items-center gap-x-1">
          <div>
            <DropdownMenu
              title="My Requests"
              :items="[
                { name: 'Request 1', path: '/attendance' },
                { name: 'Request 2', path: '/' },
              ]"
            />
          </div>
          <div>
            <DropdownMenu
              title="My Team"
              :items="[
                { name: 'Team 1', path: '/' },
                { name: 'Team 2', path: '/' },
              ]"
            />
          </div>
          <div>
            <DropdownMenu
              title="Company"
              :items="[
                { name: 'Company 1', path: '/' },
                { name: 'Company 2', path: '/' },
              ]"
            />
          </div>
          <div>
            <DropdownMenu
              title="Administrative Tool"
              :items="[
                { name: 'Tool 1', path: '/' },
                { name: 'Tool 2', path: '/' },
              ]"
            />
          </div>
          <div>
            <DropdownMenu
              title="Maintenance"
              :items="[
                { name: 'Maintain 1', path: '/' },
                { name: 'Maintain 2', path: '/' },
              ]"
            />
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
