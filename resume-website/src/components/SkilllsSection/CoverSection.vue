<template>
  <div class="mx-auto max-w-screen-xl">
    <div class="flex flex-row">
      <div class="w-1/3 flex flex-col items-center gap-y-10 mt-14">
        <SkillArea :skillInfo="SkillsInformation[0]" />
        <SkillArea :skillInfo="SkillsInformation[1]" />
      </div>
      <div class="w-1/3 flex flex-col gap-x-5 justify-center items-center">
        <label class="swap swap-flip text-9xl">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" />

          <div class="swap-on">
            <img src="@/assets/images/avatar1.png" class="w-96 h-96" />
          </div>
          <div class="swap-off">
            <img src="@/assets/images/avatar2.png" class="w-96 h-96" />
          </div>
        </label>

        <h2 class="align-middle">
          <img
            :src="`src/assets/images/social/github.svg`"
            class="w-10 h-10 inline mr-2"
          />
          <a
            href="https://github.com/fatihes1"
            target="_blank"
            class="inline text-3xl code_title align-middle hover:text-amber-600 transition-colors"
            >@fatihes1</a
          >
        </h2>
      </div>
      <div class="w-1/3 flex flex-col items-center gap-y-10 mt-14">
        <SkillArea class="items-end" :skillInfo="SkillsInformation[3]" />
        <SkillArea :skillInfo="SkillsInformation[2]" />
      </div>
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
