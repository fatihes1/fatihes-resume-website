<template>
  <div class="calc-h-full-20 overflow-hidden container mx-auto">
    <div class="flex flex-col">
      <div class="grid grid-cols-4 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
};
</script>
