<script setup>
import Button from "@/components/shared/forms/Button.vue";
import { ref, reactive, toRefs, watch, onMounted, computed } from "vue";
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

const fields = reactive({
  dateFrom: "-",
  dateTo: "-",
  company: "",
  department: "",
  location: "",
  employee: "",
});

const { dateFrom, dateTo, company, department, location, employee } =
  toRefs(fields);

const showFilter = ref(true);
const onShowFilter = () => {
  showFilter.value = !showFilter.value;
};

let isSearch = ref(false);

const areAllFieldsFilled = computed(() => {
  return Object.values(fields).every((value) => value !== null && value !== "");
});

watch(fields, () => {
  areAllFieldsFilled.value;
});

const onHandleChange = (e) => {
  const { name, value } = e.target;
  fields[name] = value;
  if (name === "company") {
    department.value = "";
    employee.value = "";
    location.value = "";
  } else if (name === "department") {
    location.value = "";
    employee.value = "";
  } else if (name === "location") {
    employee.value = "";
  }

  isSearch = areAllFieldsFilled.value;
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

const getRouteFilter = () => {
  let res = route.fullPath
    .split("/")
    .map((item) => {
      return item;
    })
    .find((item) => item === "exports");
  if (typeof res !== "undefined" && res) return false;
  return true;
};

watch([() => route.fullPath, viewFilter], () => {
  viewFilter.value = getRouteFilter();
});

onMounted(() => {
  viewFilter.value = getRouteFilter();
});

const onSearchClick = () => {
  window.alert(fields, "Searching...");
};

const dropdownData = {
  company: [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Sprout Solutions",
      value: "sprout solutions",
    },
    {
      name: "Microsoft",
      value: "microsoft",
    },
    {
      name: "Facebook",
      value: "facebook",
    },
    {
      name: "ABC Solutions",
      value: "abc solutions",
    },
  ],
  department: [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Technical",
      value: "technical",
    },
    {
      name: "Marketing",
      value: "marketing",
    },
    {
      name: "Administration",
      value: "Administration",
    },
    {
      name: "Operation",
      value: "operation",
    },
  ],
  location: [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Makati, Philippines",
      value: "makati, philippines",
    },
    {
      name: "Taguig, Philippines",
      value: "taguig, philippines",
    },
    {
      name: "Mandaluyong, Philippines",
      value: "mandaluyong, philippines",
    },
  ],
  employee: [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Alhdrin Gungon",
      value: "alhdrin gungon",
    },
  ],
};
</script>

<template>
  <aside class="h-full relative">
    <div class="inline-block pr-0 md:pr-5 pb-3 border-b">
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

    <div v-if="viewFilter" class="inline-block w-full pr-0 md:pr-5 py-3">
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
        <div
          v-if="showFilter"
          class="inline-block w-full space-y-3 overflow-y-auto h-[23vh] pt-1"
        >
          <Select
            label="Company"
            name="company"
            :defaultVal="
              dropdownData?.company?.length > 0
                ? 'Select Company'
                : 'No Company'
            "
            :disabled="dropdownData?.company?.length === 0"
            :value="company"
            :onChange="onHandleChange"
            :items="dropdownData.company"
          />
          <Select
            label="Department"
            name="department"
            :defaultVal="
              dropdownData?.department?.length > 0
                ? 'Select Department'
                : 'No Department'
            "
            :disabled="dropdownData?.department?.length === 0 || company === ''"
            :value="department"
            :onChange="onHandleChange"
            :items="dropdownData.department"
          />
          <Select
            label="Location"
            name="location"
            :defaultVal="
              dropdownData?.employee?.length > 0
                ? 'Select Location'
                : 'No Location'
            "
            :disabled="
              dropdownData?.location?.length === 0 || department === ''
            "
            :value="location"
            :onChange="onHandleChange"
            :items="dropdownData.location"
          />
          <Select
            label="Employee"
            name="employee"
            :defaultVal="
              dropdownData?.employee?.length > 0
                ? 'Select Employee'
                : 'No Employee'
            "
            :disabled="dropdownData?.employee?.length === 0 || location === ''"
            :value="employee"
            :onChange="onHandleChange"
            :items="dropdownData.employee"
          />
        </div>
        <div v-else class="inline-block space-y-1 w-full text-sm">
          <div v-for="filter of filtered" class="flex w-full">
            <div class="w-[8%]">
              <i :class="`fa-solid fa-${filter.icon}`"></i>
            </div>
            <div class="w-[82%]">
              <label class="uppercase">{{ fields[filter.name] }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="viewFilter"
      class="bottom-0 absolute border-t w-full py-5 pr-0 md:pr-5"
    >
      <div class="grid gap-y-3">
        <Button
          custom-class="bg-green-primary text-white "
          :onClick="onSearchClick"
          :disabled="!isSearch"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          Search
        </Button>
        <Button
          custom-class="bg-white text-green-primary border border-green-primary"
          :disabled="!isSearch"
        >
          <i class="fa-solid fa-download"></i>
          Export
        </Button>
      </div>
    </div>
  </aside>
</template>
