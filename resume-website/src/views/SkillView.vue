<template>
  <div
    class="lg:calc-h-full-20 xl:h-full xl:overflow-hidden xl:overflow-y-auto md:overflow-y-auto md:mt-4 lg:pt-20 sm:px-8 xl:mb-28"
  >
    <div class="container mx-auto">
      <CoverSection />
    </div>
  </div>
</template>

<script>
import CoverSection from "../components/SkilllsSection/CoverSection.vue";

export default {
  components: {
    CoverSection,
  },
};
</script>
