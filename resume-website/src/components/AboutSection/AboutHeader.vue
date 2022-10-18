<template>
  <div class="container mx-auto w-full h-screen">
    <div class="flex flex-col calc-h-full-20">
      <div class="flex flex-row justify-center items-center">
        <span
          class="w-12 h-12 border-4 border-brand_red rounded-full grid place-items-center relative mb-4 mr-40"
        >
        </span>
      </div>
      <div class="w-full h-4/5 flex flex-row">
        <div class="w-1/12 flex flex-col justify-end">
          <span
            class="w-10 h-10 border-2 border-brand_green rounded-full grid place-items-center relative mb-4 animate-spin-slow"
          >
            <span
              class="absolute -top-4 -left-5 w-10 h-10 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
            ></span>
          </span>
        </div>
        <div
          class="w-5/12 flex flex-col gap-y-12 items-start mr-24 mt-9 animate__animated animate__bounceInDown"
        >
          <h1 class="text-5xl font-bold text-gray-700 dark:text-gray-200">
            Learn more about me!
          </h1>
          <div class="flex flex-row justify-center mx-auto">
            <div
              class="text-xl flex flex-col gap-y-2 font-bold text-gray-700 dark:text-gray-300"
            >
              <h2>Birth:</h2>
              <h2>City:</h2>
              <h2>University:</h2>
              <h2>Department:</h2>
              <h2>Degree:</h2>
            </div>
            <div
              class="text-xl text-gray-500 ml-4 flex flex-col gap-y-2 dark:text-gray-300"
            >
              <h2>12 Feb 1999</h2>
              <h2>Bursa/ Turkey</h2>
              <h2>Bursa Technical University</h2>
              <h2>Computer Engineering</h2>
              <h2>Bachelor</h2>
            </div>
          </div>
          <h1 class="text-2xl font-medium text-gray-500 dark:text-gray-200">
            Hi! Fatih from Turkey here. As a junior full stack web developer, I
            wish to pursue this field as a career. Time is the most valuable
            resource we have in life. I enjoy improving myself and doing things
            for myself because of this. Keep in mind that you can look over some
            of my accounts. (such as
            <a
              href="https://github.com/fatihes1"
              class="hover:underline"
              target="_blank"
              >GitHub</a
            >,
            <a
              href="https://www.linkedin.com/in/fatihes/"
              class="hover:underline"
              target="_blank"
              >LinkedIn</a
            >,
            <a
              href="https://fatihes.medium.com/"
              class="hover:underline"
              target="_blank"
              >Medium</a
            >)
          </h1>
          <a
            href="https://fatihes.medium.com/print-who-am-i-31a3a67eb262"
            target="_blank"
            class="text-blue-600 font-medium text-2xl hover:underline cursor-pointer"
          >
            For More Read My

            <pre class="inline font-bold">'Who Am I'</pre>
            Blog Post
          </a>
        </div>
        <div
          class="w-5/12 flex flex-col gap-y-6 items-start animate__animated animate__bounceInUp"
        >
          <h1 class="text-5xl font-bold text-gray-700 dark:text-gray-200 mt-8">
            Communities
          </h1>
          <CommunityCard
            v-for="community in CommunityInfo"
            key="id"
            :community="community"
          />
          <div class="flex flex-row justify-end mr-40">
            <span
              class="w-14 h-14 bg-brand_blue bg-opacity-100 rounded-full grid place-items-center relative mb-4"
            >
            </span>
          </div>
        </div>
        <div class="w-1/12 flex flex-col justify-center mt-10">
          <span
            class="w-10 h-10 border-4 border-brand_orange rounded-full grid place-items-center relative mb-4 animate-spin-slow"
          >
            <span
              class="absolute -bottom-10 -left-10 w-14 h-14 bg-brand_orange scale-115 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
            ></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityCard from "./CommunityCard.vue";
import CommunityInfo from "@/assets/CommunityInfo.json";

export default {
  components: { CommunityCard },
  data() {
    return {
      CommunityInfo,
    };
  },
};
</script>
