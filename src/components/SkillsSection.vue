<template>
  <section
    id="skills"
    class="w-full bg-indigo-200 dark:bg-slate-900 py-8 text-slate-800"
  >
    <div class="w-5/6 m-auto dark:text-white">
      <h2 class="w-full text-center text-3xl font-black pb-4">Skills</h2>
      <p class="text-center">
        I have developed proficiency in Vue, React, JavaScript/TypeScript, Sass,
        CSS, HTML, Git, and Figma. These skills enable me to create dynamic web
        applications, build powerful user interfaces, write clean and modular
        styles, structure content effectively, manage version control, and
        transform design concepts into functional websites.
      </p>
      <div class="w-full grid grid-cols-2 md:grid-cols-4">
        <SkillsIcon
          v-for="(icon, index) in skills"
          :key="index"
          :icon-string="icon.iconString"
          :skill-name="icon.skillName"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillsIcon from "./SkillsIcon.vue";
import type { SkillsIconProps } from "./SkillsIcon.vue";

const skills: SkillsIconProps[] = [
  {
    iconString: "fa-brands fa-vuejs",
    skillName: "Vue.js",
  },
  {
    iconString: "fa-brands fa-react",
    skillName: "React",
  },
  {
    iconString: "fa-brands fa-js",
    skillName: "JavaScript/TypeScript",
  },
  {
    iconString: "fa-brands fa-sass",
    skillName: "Sass",
  },
  {
    iconString: "fa-brands fa-css3",
    skillName: "CSS",
  },
  {
    iconString: "fa-brands fa-html5",
    skillName: "HTML",
  },
  {
    iconString: "fa-brands fa-git",
    skillName: "Git",
  },
  {
    iconString: "fa-brands fa-figma",
    skillName: "Figma",
  },
];
</script>

<style></style>
