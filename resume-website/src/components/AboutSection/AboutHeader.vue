<template>
  <div class="container mx-auto">
    <div class="w-full flex flex-row gap-x-5">
      <div class="w-1/2 h-80">
        <div class="bg-orange-400 w-full h-full rounded-xl">
          <div class="p-10">Picture Section</div>
        </div>
      </div>
      <div class="w-1/2 h-80">
        <div class="bg-blue-400 w-full h-full rounded-xl">
          <div class="p-10">Basic Info Section</div>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <CommunityInfoCardVue />
      <CommunityInfoCardVue />
      <CommunityInfoCardVue />
      <CommunityInfoCardVue />
      <CommunityInfoCardVue />
    </div>
  </div>
</template>

<script>
import CommunityInfoCardVue from "./CommunityInfoCard.vue";
export default {
  components: { CommunityInfoCardVue },
};
</script>
