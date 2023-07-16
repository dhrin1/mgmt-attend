<script setup>
import Button from "@/components/shared/forms/Button.vue";
import { ref, reactive, toRefs, watch } from "vue";
import Select from "@/components/shared/forms/Select.vue";
import Input from "../shared/forms/Input.vue";

const items = [
  {
    title: "Attendance Logs",
    name: "logs",
    icon: "fa-regular fa-calendar",
  },
  { title: "Exported Files", name: "exports", icon: "fa-solid fa-download" },
];

const getCurrDate = () => {
  const currDate = new Date();
  return currDate.toISOString().slice(0, 10);
};

const fields = reactive({
  dateFrom: getCurrDate(),
  dateTo: getCurrDate(),
  company: "All",
  department: "All",
  location: "All",
  employee: "All",
});

const { dateFrom, dateTo, company, department, location, employee } =
  toRefs(fields);

const onSearchClick = () => {
  console.log(fields);
};

const showFilter = ref(false);
const onShowFilter = () => {
  showFilter.value = !showFilter.value;
};

const onHandleChange = (e) => {
  const { name, value } = e.target;
  fields[name] = value;
};

const filtered = [
  { name: "company", icon: "building" },
  { name: "department", icon: "people-group" },
  { name: "location", icon: "location-dot" },
  { name: "employee", icon: "user" },
];

import { useRoute } from "vue-router";

const route = useRoute();

const viewFilter = ref(false);

watch(route, () => {
  const getRouteFilter = () => {
    let res = route.fullPath
      .split("/")
      .map((item) => {
        return item;
      })
      .find((item) => item === "exports");

    if (typeof res !== "undefined" && res) {
      return false;
    } else {
      return true;
    }
  };
  viewFilter.value = getRouteFilter();
});
</script>

<template>
  <aside class="h-full relative">
    <div class="inline-block pr-5 pb-3 border-b">
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
          class="w-full p-3 rounded mb-2 flex gap-x-2 items-center hover:bg-green-secondary transition-colors"
        >
          <i :class="`${item.icon}`"></i>
          {{ item.title }}</router-link
        >
      </div>
    </div>

    <div
      v-if="viewFilter"
      class="inline-block w-full pr-5 py-3 overflow-y-scroll h-[24vw]"
    >
      <div class="inline-block space-y-3 w-full mb-3">
        <div>
          <label class="uppercase font-semibold text-sm">Date Range</label>
        </div>
        <Input
          type="date"
          name="dateFrom"
          :value="dateFrom"
          :onChange="onHandleChange"
          label="Date From"
        />
        <Input
          type="date"
          name="dateTo"
          :value="dateTo"
          :onChange="onHandleChange"
          label="Date To"
        />
      </div>
      <div class="inline-block w-full space-y-3">
        <div class="flex justify-between items-center w-full">
          <label class="uppercase font-semibold text-sm">Filters</label>
          <button @click="onShowFilter" class="text-xs text-blue-600">
            {{ showFilter ? "Hide All" : "Show All" }}
          </button>
        </div>
        <div v-if="showFilter" class="inline-block w-full space-y-3">
          <Select
            label="Company"
            name="company"
            :value="company"
            :onChange="onHandleChange"
            :items="[
              {
                name: 'Sprout Solutions',
                value: 'sprout solutions',
              },
              {
                name: 'Microsoft',
                value: 'microsoft',
              },
              {
                name: 'Facebook',
                value: 'facebook',
              },
              {
                name: 'ABC Solutions',
                value: 'abc solutions',
              },
            ]"
          />
          <Select
            label="Department"
            name="department"
            :value="department"
            :onChange="onHandleChange"
            :items="[
              {
                name: 'Technical',
                value: 'technical',
              },
              {
                name: 'Marketing',
                value: 'marketing',
              },
              {
                name: 'Administration',
                value: 'Administration',
              },
              {
                name: 'Operaation',
                value: 'operation',
              },
            ]"
          />
          <Select
            label="Location"
            name="location"
            :value="location"
            :onChange="onHandleChange"
            :items="[
              {
                name: 'Makati, Philippines',
                value: 'makati, philippines',
              },
              {
                name: 'Taguig, Philippines',
                value: 'taguig, philippines',
              },
              {
                name: 'Mandaluyong, Philippines',
                value: 'mandaluyong, philippines',
              },
            ]"
          />
          <Select
            label="Employee"
            name="employee"
            :value="employee"
            :onChange="onHandleChange"
            :items="[
              {
                name: 'Alhdrin Gungon',
                value: 'alhdrin gungon',
              },
            ]"
          />
        </div>
        <div v-else class="inline-block space-y-1 capitalize w-full text-sm">
          <div v-for="filter of filtered" class="flex w-full">
            <div class="w-[8%]">
              <i :class="`fa-solid fa-${filter.icon}`"></i>
            </div>
            <div class="w-[82%]">{{ fields[filter.name] }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="viewFilter" class="bottom-0 absolute border-t w-full py-5 pr-5">
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
