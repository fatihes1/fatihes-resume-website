<template>
  <div class="container mx-auto">
    <div class="h-20 flex flex-col justify-center items-center">
      <h1
        class="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-purple-600"
      >
        Check out some of my blogs
      </h1>
      <h2 class="text-center font-medium text-lg text-gray-700 mt-2">
        Articles created in order to increase the number of resources in Turkish
        on various technological subjects.
      </h2>
    </div>
    <div class="flex flex-row gap-x-8 w-full calc-h-full-40 mt-4">
      <div class="flex flex-col gap-y-8 h-full w-1/5">
        <div class="h-3/5 w-full">
          <div class="w-full h-full bg-red-300 rounded-xl"></div>
        </div>
        <div class="h-2/5">
          <img :src="Blogs[0].image" class="w-full h-full rounded-xl" />
        </div>
      </div>
      <div class="flex flex-col gap-y-8 justify-between w-1/5">
        <div class="h-2/5">
          <img :src="Blogs[1].image" class="w-full h-full rounded-xl" />
        </div>
        <div class="h-3/5">
          <img :src="Blogs[4].image" class="w-full h-full rounded-xl" />
        </div>
      </div>
      <div class="flex flex-col gap-y-8 justify-between w-1/5">
        <div class="h-3/5">
          <img :src="Blogs[4].image" class="w-full h-full rounded-xl" />
        </div>
        <div class="h-2/5">
          <img :src="Blogs[4].image" class="w-full h-full rounded-xl" />
        </div>
      </div>
      <div class="flex flex-col gap-y-8 justify-between w-1/5">
        <div class="h-2/5">
          <img :src="Blogs[4].image" class="w-full h-full rounded-xl" />
        </div>
        <div class="h-3/5">
          <img :src="Blogs[4].image" class="w-full h-full rounded-xl" />
        </div>
      </div>
      <div class="flex flex-col gap-y-8 justify-between w-1/5">
        <div class="h-3/5">
          <img :src="Blogs[4].image" class="w-full h-full rounded-xl" />
        </div>
        <div class="h-2/5">
          <div class="w-full h-full bg-orange-400 rounded-xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from "@/assets/Blogs.json";

export default {
  data() {
    return {
      Blogs,
    };
  },
};
</script>
