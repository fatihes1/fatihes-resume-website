<template>
  <div class="container mx-auto w-full h-screen lg:h-full xl:pb-10">
    <div class="flex flex-col h-full lg:calc-h-full-20">
      <div
        class="lg:flex flex-row justify-center items-center hidden sm:hidden"
      >
        <span
          class="w-12 h-12 border-4 border-brand_red rounded-full grid place-items-center relative mb-4 mr-4 lg:mr-40"
        >
        </span>
      </div>
      <div class="w-full h-4/5 flex flex-col lg:flex-row mt-6 lg:mt0">
        <div
          class="hidden lg:w-1/12 lg:flex flex-row lg:flex-col justify-end mr-4"
        >
          <span
            class="w-10 h-10 border-2 border-brand_green rounded-full grid place-items-center relative mb-4 animate-spin-slow"
          >
            <span
              class="absolute -top-4 -left-5 w-10 h-10 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
            ></span>
          </span>
        </div>
        <div
          class="w-full lg:w-5/12 flex flex-col gap-y-4 lg:gap-y-12 items-center lg:items-start mr-24 mt-9 animate__animated animate__bounceInDown"
        >
          <h1
            class="text-3xl text-center lg:text-4xl xl:text-5xl font-bold text-gray-700 dark:text-gray-200"
          >
            Learn more about me!
          </h1>
          <div
            class="flex flex-row justify-center md:text-center md:mx-auto mx-auto xl:mx-auto ml-4 lg:ml-0"
          >
            <div
              class="md:text-center text-base lg:text-lg xl:text-xl xl:text-center flex flex-col gap-y-2 font-bold text-gray-700 dark:text-gray-300"
            >
              <h2>Birth:</h2>
              <h2>City:</h2>
              <h2>University:</h2>
              <h2>Department:</h2>
              <h2>Degree:</h2>
            </div>
            <div
              class="text-base md:text-center lg:text-lg xl:text-xl text-gray-500 xl:text-center ml-4 flex flex-col gap-y-2 dark:text-gray-300"
            >
              <h2>12 Feb 1999</h2>
              <h2>Bursa/ Turkey</h2>
              <h2>Bursa Technical University</h2>
              <h2>Computer Engineering</h2>
              <h2>Bachelor</h2>
            </div>
          </div>
          <h1
            class="text-lg lg:text-xl xl:text-2xl mx-2 lg:mx-0 font-medium text-gray-500 dark:text-gray-200"
          >
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
            class="text-blue-600 font-medium text-lg lg:text-xl xl:text-2xl hover:underline cursor-pointer"
          >
            For More Read My

            <pre class="inline font-bold">'Who Am I'</pre>
            Blog Post
          </a>
        </div>
        <div
          class="w-full lg:w-5/12 flex flex-col gap-y-3 lg:gap-y-6 xl:gap-y-2 items-center lg:items-start animate__animated animate__bounceInUp"
        >
          <h1
            class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 dark:text-gray-200 mt-8"
          >
            Communities
          </h1>
          <CommunityCard
            v-for="community in CommunityInfo"
            key="id"
            :community="community"
          />
          <div class="flex mt-5 lg:mt-0 flex-row items-end r-5 lg:mr-40">
            <span
              class="w-14 h-14 bg-brand_blue bg-opacity-100 rounded-full grid place-items-center relative mb-4"
            >
            </span>
          </div>
        </div>
        <div
          class="w-full lg:w-1/12 flex flex-col justify-center mt-0 mx-10 lg:mx-0 lg:mt-10"
        >
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
