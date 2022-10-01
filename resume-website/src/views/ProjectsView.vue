<template>
  <div class="calc-h-full-20 overflow-hidden container mx-auto">
    <div class="flex flex-col">
      <div class="grid grid-cols-4 gap-10 mt-10">
        <ProjectCard
          v-for="project in ProjectInfo"
          :key="id"
          :project="project"
          class="my-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
import ProjectInfo from "@/assets/Projects.json";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      ProjectInfo,
    };
  },
};
</script>
