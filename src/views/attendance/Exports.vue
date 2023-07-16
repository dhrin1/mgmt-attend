<template>
  <section class="pl-4 pt-4">
    <div class="flex justify-between items-center mb-[15px]">
      <div class="inline-block">
        <h2 class="text-xl font-semibold">Exported Files</h2>
        <p class="text-xs">No file to download</p>
      </div>
    </div>
    <div class="h-[80vh]">
      <DataTable
        :noDataProp="{
          title: 'There are no exported items to show on your end.',
          msg: 'Show for the logs and click Export to generate the file here',
        }"
      />
    </div>
  </section>
</template>

<script setup>
import DataTable from "@/components/shared/DataTable.vue";
</script>
