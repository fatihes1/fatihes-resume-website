<template>
  <div class="calc-h-full-20 overflow-hidden">
    <div class="container mx-auto mt-14">
      <div class="flex flex-row justify-around">
        <div class="flex my-auto justify-center align-middle items-center">
          <PhoneMockup />
        </div>
        <div>
          <h1 class="text-5xl font-bold text-gray-700">
            Get in Touch With Me!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneMockup from "@/components/ContactSection/PhoneMockup.vue";
export default {
  components: {
    PhoneMockup,
  },
};
</script>
