<template>
  <span
    class="relative sm:hidden flex justify-center items-center hover:cursor-pointer w-[40px] h-[40px] border border-transparent hover:border-gray-200 hover:dark:border-gray-700 rounded-lg"
    aria-label="Toggle Navigation Menu"
    @click="toggleNav"
    ref="openButtonRef"
  >
    <font-awesome-icon
      icon="fa-solid fa-bars"
      class="text-xl dark:text-white pointer-events-none"
    />
  </span>
  <div
    id="mobile-nav"
    ref="menuRef"
    class="absolute left-8 top-[75px] rounded-xl p-4 z-10 bg-white dark:bg-slate-700 flex flex-col gap-2 dark:text-white border border-gray-200 dark:border-gray-700 drop-shadow-xl"
    :class="{ closed: !isOpen, open: isOpen }"
  >
    <a class="font-bold flex gap-1" href="#about" @click="toggleNav">
      <span class="text-indigo-500">[0]</span>
      About
    </a>
    <a class="font-bold flex gap-1" href="#projects" @click="toggleNav">
      <span class="text-indigo-500">[1]</span>
      Projects
    </a>
    <a class="font-bold flex gap-1" href="#experience" @click="toggleNav">
      <span class="text-indigo-500">[2]</span>
      Experience
    </a>
    <a class="font-bold flex gap-1" href="#skills" @click="toggleNav">
      <span class="text-indigo-500">[3]</span>
      Skills
    </a>
    <a class="font-bold flex gap-1" href="#links" @click="toggleNav">
      <span class="text-indigo-500">[4]</span>
      Links
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import ToggleColorScheme from "./ToggleColorScheme.vue";

const isOpen = ref<boolean>(false);

const openButtonRef = ref();
const menuRef = ref();

function toggleNav() {
  isOpen.value = !isOpen.value;
}

function closeListener(event: MouseEvent) {
  // If the clicked item wasn't in the menu
  const isWithinMenu = Array.from(menuRef.value.children).some(
    (item) => item === event.target
  );
  const isOpenButton = event.target === openButtonRef.value;

  if (!isWithinMenu && !isOpenButton) {
    toggleNav();
  }
}

watch(isOpen, () => {
  const window = document.querySelector("body");
  if (!isOpen.value) {
    if (window) {
      window.removeEventListener("click", closeListener);
    }
  } else {
    if (window) {
      window.addEventListener("click", closeListener);
    }
  }
});

onUnmounted(() => {
  const window = document.querySelector("body");
  if (window) {
    window.removeEventListener("click", closeListener);
  }
});
</script>

<style>
.closed {
  @apply hidden;
}
.open {
  @apply flex;
}
</style>
