<template>
  <div
    class="xl:calc-h-full-20 lg:h-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden container mx-auto sm:px-5 lg:mt-24"
  >
    <div class="flex flex-col mt-5 xl:mt-0">
      <h1
        class="text-center text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-green-700"
      >
        Check out some of my projects
      </h1>
      <div
        class="grid lg:grid-cols-4 mt-5 gap-6 mx-5 lg:mx-0 lg:gap-10 lg:mt-10"
      >
        <ProjectCard
          v-for="project in ProjectInfo"
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
