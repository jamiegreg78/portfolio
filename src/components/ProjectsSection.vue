<template>
  <section
    id="projects"
    class="w-full bg-indigo-200 dark:bg-slate-900 py-8 text-slate-800"
  >
    <div class="w-5/6 m-auto dark:text-white">
      <h2 class="w-full text-center text-3xl font-black">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6">
        <ProjectCard
          project-name="Plansly"
          project-description="Plansly is a task management web application built with Vue.js and powered by Supabase, an open-source Firebase alternative that provided the authentication systems and PostgreSQL database. It enables students to create, edit, and organize tasks on a task board, add tags, and task dependencies to stay on top of their workload and manage their studies effectively. This project was developed for my dissertation at Aberystwyth University"
          project-image="/public/plansly_screenshot.png"
        >
          <TechChip
            :tech="{ name: 'Vue.js', color: '#42b983', textColor: '#fff' }"
          />
          <TechChip
            :tech="{ name: 'Typescript', color: '#3178C6', textColor: '#fff' }"
          />
        </ProjectCard>
        <ProjectCard project-name="Memorlyst">
          <TechChip
            :tech="{ name: 'React', color: '#00d8ff', textColor: '#fff' }"
          />
          <TechChip
            :tech="{ name: 'Typescript', color: '#3178C6', textColor: '#fff' }"
          />
          <TechChip
            :tech="{ name: 'Tailwind', color: '#38bdf9', textColor: '#fff' }"
          />
        </ProjectCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import TechChip from "./TechChip.vue";
</script>
