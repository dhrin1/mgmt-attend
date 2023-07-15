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
                { name: 'Request 1', path: '/' },
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
            <router-link :to="{ name: 'attendance' }">Attendance</router-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup>
import DropdownMenu from "@/components/shared/DropdownMenu.vue";
</script>
