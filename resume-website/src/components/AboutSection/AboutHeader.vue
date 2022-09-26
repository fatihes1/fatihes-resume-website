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
            class="w-10 h-10 border-2 border-brand_green rounded-full grid place-items-center relative mb-4"
          >
            <span
              class="absolute -top-4 -left-5 w-10 h-10 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25"
            ></span>
          </span>
        </div>
        <div
          class="w-5/12 flex flex-col gap-y-10 items-start mr-24 mt-9 animate__animated animate__bounceInDown"
        >
          <h1 class="text-5xl font-bold text-gray-700">Learn more about me!</h1>
          <h1 class="text-2xl font-medium text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            praesentium ipsum pariatur, obcaecati minima cupiditate debitis
            laudantium maiores dignissimos ullam exercitationem, officia dolores
            nulla quos nisi? Eum culpa eveniet obcaecati.
          </h1>
          <h1 class="text-2xl font-medium text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            praesentium ipsum pariatur, obcaecati minima cupiditate debitis
            laudantium maiores dignissimos ullam exercitationem, officia dolores
            nulla quos nisi? Eum culpa eveniet obcaecati.
          </h1>
          <a
            href="https://fatihes.medium.com/print-who-am-i-31a3a67eb262"
            target="_blank"
            class="text-blue-600 font-medium text-2xl hover:underline cursor-pointer"
          >
            Read my

            <pre class="inline font-bold">'Who Am I'</pre>
            Blog Post
          </a>
        </div>
        <div
          class="w-5/12 flex flex-col justify-around items-start animate__animated animate__bounceInUp"
        >
          <h1 class="text-5xl font-bold text-gray-700">Communities</h1>
          <CommunityCard v-for="community in CommunityInfo" key="id" />
          <div class="flex flex-row justify-end mr-40">
            <span
              class="w-14 h-14 bg-brand_blue bg-opacity-100 rounded-full grid place-items-center relative mb-4"
            >
            </span>
          </div>
        </div>
        <div class="w-1/12 flex flex-col justify-center mt-10">
          <span
            class="w-10 h-10 border-4 border-brand_orange rounded-full grid place-items-center relative mb-4"
          >
            <span
              class="absolute -bottom-10 -left-10 w-14 h-14 bg-brand_orange scale-150 rounded-full -z-1 bg-opacity-25"
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
