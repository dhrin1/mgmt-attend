<template>
  <section class="pl-4 pt-4">
    <div class="flex justify-between items-center mb-[15px]">
      <div class="inline-flex space-x-2 items-center">
        <i class="fa-solid fa-calendar text-green-primary"></i>
        <label>Date Range</label>
      </div>
      <div>
        <div class="relative bg-green-primary rounded-[5px]">
          <div class="inline-flex relative m-[1px]" role="group">
            <button @click="onSelect" class="px-2 py-1 text-xs text-white">
              Active Logs
            </button>
            <button @click="onSelect" class="px-2 py-1 text-xs">
              Deleted Logs
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[80vh]">
      <DataTable
        :noDataProp="{
          title: 'No attendance logs to show',
          msg: 'Get started by searching for the logs',
        }"
      />
    </div>
  </section>
</template>
<script setup>
import DataTable from "@/components/shared/DataTable.vue";
</script>

<script>
export default {
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    onSelect() {
      this.isSelect = !this.isSelect;
    },
  },
};
</script>
