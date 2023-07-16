<script setup>
import Button from "../shared/Button.vue";
import { reactive, toRefs } from "vue";

const items = [
  {
    title: "Attendance Logs",
    name: "logs",
    icon: "fa-regular fa-calendar",
  },
  { title: "Exported Files", name: "exports", icon: "fa-solid fa-download" },
];

const fields = reactive({
  date1: "",
  date2: "",
  company: [],
  department: [],
  location: [],
  employee: [],
});

const { date1, date2, company, department, location, employee } =
  toRefs(fields);

const onSearchClick = () => {};
</script>

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
          active-class="bg-green-secondary text-green-primary"
          class="w-full p-4 rounded-md mb-2 flex gap-x-2 items-center hover:bg-green-secondary transition-colors"
        >
          <i :class="`${item.icon}`"></i>
          {{ item.title }}</router-link
        >
      </div>
    </div>
    <div class="bottom-0 absolute border-t w-full py-5 pr-5">
      <div class="grid gap-y-3">
        <Button
          custom-class="bg-green-primary text-white "
          :onClick="onSearchClick"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          Search
        </Button>
        <Button
          custom-class="bg-white  text-green-primary border border-green-primary"
          :disabled="true"
        >
          <i class="fa-solid fa-download"></i>
          Export
        </Button>
      </div>
    </div>
  </aside>
</template>
