<template>
  <nav
    class="w-full p-8 sm:p-6 sm:px-0 sm:w-5/6 m-auto flex justify-between items-center"
  >
    <MobileNav />
    <div class="hidden sm:flex gap-2 dark:text-white">
      <a class="font-bold flex gap-1" href="#about">
        <span class="text-indigo-500">[0]</span>
        About
      </a>
      <a class="font-bold flex gap-1" href="#projects">
        <span class="text-indigo-500">[1]</span>
        Projects
      </a>
      <a class="font-bold flex gap-1" href="#experience">
        <span class="text-indigo-500">[2]</span>
        Experience
      </a>
      <a class="font-bold flex gap-1" href="#skills">
        <span class="text-indigo-500">[3]</span>
        Skills
      </a>
      <a class="font-bold flex gap-1" href="#links">
        <span class="text-indigo-500">[4]</span>
        Links
      </a>
    </div>
    <ToggleColorScheme />
  </nav>
</template>

<script setup lang="ts">
import ToggleColorScheme from "./ToggleColorScheme.vue";
import MobileNav from "./MobileNav.vue";
</script>
