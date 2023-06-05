<template>
  <span
    :style="{ background: tech.color, color: tech.textColor }"
    class="block px-2 py-1 rounded-lg font-semibold"
    >{{ tech.name }}</span
  >
</template>

<script setup lang="ts">
export type Tech = {
  name: string;
  color: string;
  textColor: string;
};

export type TechChipProps = {
  tech: Tech;
};
const props = defineProps<TechChipProps>();
</script>
