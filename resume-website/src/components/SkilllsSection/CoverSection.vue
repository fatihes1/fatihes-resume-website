<template>
  <div class="mx-auto max-w-screen-xl">
    <div class="flex flex-row">
      <div class="w-1/2">
        <h1 class="text-center text-5xl mx-auto mt-10 font-bold text-gray-700">
          Check out My Skills
        </h1>
        <img src="@/assets/images/avatar1.png" class="w-80 h-80 mx-auto" />
        <SkillArea class="mx-auto" />
      </div>
      <div class="w-1/2">
        <h1 class="text-center text-5xl mx-auto mt-10 font-bold text-gray-700">
          Experiences
        </h1>
        <Career class="mx-auto mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillArea from "./SkillArea.vue";
import SkillsInformation from "@/assets/Skills.json";
import Career from "./Career.vue";
export default {
  components: {
    SkillArea,
    Career,
  },
  data() {
    return {
      SkillsInformation,
    };
  },
};
</script>
<!-- <div class="flex flex-row justify-center items-center">
          <img src="@/assets/images/avatar2.png" class="w-80 h-80" />
        </div> -->
<!-- 
        <SkillArea
        v-for="informaton in SkillsInformation"
        :key="id"
        :skillInfo="informaton"
      /> -->
