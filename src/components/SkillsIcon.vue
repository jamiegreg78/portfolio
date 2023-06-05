<template>
  <span class="block p-4 flex flex-col gap-4 items-center">
    <font-awesome-icon :icon="iconString" class="text-8xl" />
    <span>{{ skillName }}</span>
  </span>
</template>

<script setup lang="ts">
export type SkillsIconProps = {
  iconString: string;
  skillName: string;
};

const props = defineProps<SkillsIconProps>();
</script>

<style></style>
