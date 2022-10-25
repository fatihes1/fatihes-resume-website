<template>
  <div
    class="md:calc-h-full-20 overflow-x-hidden overflow-y-auto md:overflow-hidden container mx-auto"
  >
    <div class="flex flex-col mt-5 md:mt-0">
      <h1
        class="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-green-700"
      >
        Check out some of my projects
      </h1>
      <div
        class="grid md:grid-cols-4 mt-5 gap-6 mx-5 md:mx-0 md:gap-10 md:mt-10"
      >
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
