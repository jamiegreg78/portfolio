<template>
  <section id="experience" class="w-full py-8 text-slate-800">
    <div class="w-5/6 m-auto dark:text-white">
      <h2 class="w-full text-center text-3xl font-black">Experience</h2>
      <div class="py-4">
        <ExperienceCards
          company-name="Net World Sports"
          role-name="Junior Front End Developer"
          role-description="As a Front End Developer at Net World Sports, I specialized in implementing designs created by the design team using Adobe XD. I worked with Magento 2, Vue.js, SCSS, and GraphQL to bring these designs to life, creating visually appealing and interactive interfaces. Collaborating closely with cross-functional teams, I ensured seamless integration of design elements into the final product, delivering exceptional user experiences."
          start-date="June 2021"
          end-date="May 2022"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ExperienceCards from "./ExperienceCards.vue";
</script>

<style></style>
