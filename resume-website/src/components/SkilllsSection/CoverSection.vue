<template>
  <div class="mx-auto max-w-screen-xl">
    <div class="flex flex-col">
      <div class="grid grid-cols-3 row-gap-10">
        <div class="flex flex-row justify-center items-center">
          <img src="@/assets/images/avatar1.png" class="w-40 h-40" />
        </div>
        <div class="flex flex-row justify-center items-center">
          <img src="@/assets/images/avatar2.png" class="w-80 h-80" />
        </div>
        <div class="flex flex-row justify-center items-center">
          <img src="@/assets/images/avatar3.png" class="w-40 h-40" />
        </div>
      </div>
      <!-- <div class="lg:w-1/2">
        <p class="text-base text-gray-700 md:text-lg">
          For those who have seen the Earth from space, and for the hundreds and
          perhaps thousands more who will, the experience most certainly changes
          your perspective.
        </p>
      </div> -->
    </div>
    <div class="grid gap-8 row-gap-10 grid-cols-4">
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
