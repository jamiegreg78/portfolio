<template>
  <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
    <span class="block flex-grow whitespace-nowrap"
      >{{ startDate }} - {{ endDate }}</span
    >
    <span
      class="block w-full flex-shrink p-4 border border-gray-200 dark:border-gray-700 rounded-xl"
    >
      <h3 class="text-xl font-bold">{{ companyName }}</h3>
      <h4 class="pb-2">{{ roleName }}</h4>
      <p>{{ roleDescription }}</p>
    </span>
  </div>
</template>

<script setup lang="ts">
export type ExperienceProps = {
  companyName: string;
  roleName: string;
  roleDescription: string;
  startDate: string;
  endDate: string;
};

const props = defineProps<ExperienceProps>();
</script>

<style></style>
