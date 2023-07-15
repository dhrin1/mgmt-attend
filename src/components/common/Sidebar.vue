<template>
  <aside class="h-full relative">
    <div class="inline-block pr-5">
      <div class="grid gap-y-3 my-4">
        <h2 class="text-2xl font-medium">Manage Attendance</h2>
        <p class="text-sm">
          Attendance management is where you can generate, add, edit, exports
          the logs of employee.
        </p>
      </div>
      <div class="grid space-y-2" v-for="item of items">
        <router-link
          :to="{ path: `/attendance/${item.name}` }"
          tags="button"
          exact
          active-class="bg-green-secondary"
          class="w-full p-4 rounded-md mb-2 hover:bg-green-secondary"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
    <div class="bottom-0 absolute border-t w-full pr-5">
      <div class="grid gap-y-3">
        <button class="bg-green-primary text-white"></button>
      </div>
    </div>
  </aside>
</template>

<script setup>
const items = [
  { title: "Attendance Logs", name: "logs", icon: "date" },
  { title: "Exported Files", name: "exports", icon: "file" },
];
</script>
