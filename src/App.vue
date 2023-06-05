<template>
  <div
    id="content-container"
    class="w-full h-full m-auto dark:bg-gray-950 bg-white drop-shadow-2xl sm:border-2 border-black dark:border-slate-700 overflow-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-white dark:scrollbar-thumb-indigo-300 dark:scrollbar-track-transparent"
  >
    <PageHeader />
    <main class="w-full w-full m-auto">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from "./components/PageHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
</script>

<style>
body * {
  @apply transition-colors duration-200;
}
</style>
