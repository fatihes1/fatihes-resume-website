<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="flex flex-col mb-6 lg:flex-row md:mb-10">
      <div class="lg:w-1/2">
        <img src="@/assets/images/avatar1.png" />
      </div>
      <!-- <div class="lg:w-1/2">
        <p class="text-base text-gray-700 md:text-lg">
          For those who have seen the Earth from space, and for the hundreds and
          perhaps thousands more who will, the experience most certainly changes
          your perspective.
        </p>
      </div> -->
    </div>
    <div class="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <SkillArea
        v-for="informaton in SkillsInformation"
        :key="id"
        :skillInfo="informaton"
      />
      <!-- <SkillArea :skillInfo="info" />
      <SkillArea :skillInfo="info" />
      <SkillArea :skillInfo="info" /> -->
    </div>
  </div>
</template>

<script>
import SkillArea from "./SkillArea.vue";
import SkillsInformation from "@/assets/Skills.json";
export default {
  components: {
    SkillArea,
  },
  data() {
    return {
      SkillsInformation,
    };
  },
  mounted() {
    console.log(this.SkillsInformation);
  },
};
</script>
