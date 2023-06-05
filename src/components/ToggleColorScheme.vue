<template>
  <span
    aria-label="Toggle Color Scheme"
    class="flex justify-center items-center hover:cursor-pointer w-[40px] h-[40px] border border-transparent hover:border-gray-200 hover:dark:border-gray-700 rounded-lg"
    @click="toggleTheme"
  >
    <font-awesome-icon
      class="dark:text-white text-xl"
      :icon="theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
    />
  </span>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref(localStorage.theme === "dark" ? "dark" : "light");

function toggleTheme() {
  const newTheme = theme.value === "dark" ? "light" : "dark";
  theme.value = newTheme;
  localStorage.theme = newTheme;

  applyTheme(newTheme);
}

function applyTheme(newTheme: string) {
  const element = document.querySelector("html");

  if (element !== null) {
    if (newTheme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
}
</script>
