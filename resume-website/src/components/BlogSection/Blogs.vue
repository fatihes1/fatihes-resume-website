<template>
  <div class="container mx-auto h-full lg:calc-h-full-20">
    <div class="xl:calc-h-full-20">
      <div class="xl:h-20 flex flex-col justify-center items-center">
        <h1
          class="text-center text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-purple-600"
        >
          Check out some of my blogs
        </h1>
        <h2
          class="text-center font-medium text-base lg:text-lg xl:text-xl text-gray-700 mt-2 dark:text-gray-100"
        >
          Articles created in order to increase the number of resources in
          Turkish on various technological subjects.
        </h2>
      </div>
      <div
        class="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:gap-x-4 w-full xl:calc-h-full-40 mt-4"
      >
        <div
          class="flex flex-row lg:flex-col lg:gap-y-8 lg:h-full w-full lg:w-1/5 animate__animated animate__bounceInDown"
        >
          <div class="xl:h-3/5 lg:h-3/5 w-full mx-3 lg:mx-0">
            <TextCard :blog="Blogs[0]" />
          </div>
          <div class="xl:h-2/5 lg:h-2/5 w-full hidden lg:flex">
            <ImageCard :image="Blogs[0].image" :blogUrl="Blogs[0].url" />
          </div>
        </div>
        <div
          class="flex flex-row lg:flex-col lg:gap-y-8 justify-between lg:h-full w-full lg:w-1/5 animate__animated animate__bounceInUp"
        >
          <div class="xl:h-2/5 lg:h-2/5 w-full hidden lg:flex">
            <ImageCard :image="Blogs[1].image" :blogUrl="Blogs[1].url" />
          </div>
          <div class="xl:h-3/5 lg:h-3/5 w-full mx-3 lg:mx-0">
            <TextCard :blog="Blogs[1]" />
          </div>
        </div>
        <div
          class="flex flex-row lg:flex-col lg:gap-y-8 lg:h-full w-full lg:w-1/5 animate__animated animate__bounceInDown"
        >
          <div class="xl:h-3/5 lg:h-3/5 w-full mx-3 lg:mx-0">
            <TextCard :blog="Blogs[2]" />
          </div>
          <div class="xl:h-2/5 lg:h-2/5 w-full hidden lg:flex">
            <ImageCard :image="Blogs[2].image" :blogUrl="Blogs[2].url" />
          </div>
        </div>
        <div
          class="flex flex-row lg:flex-col lg:gap-y-8 justify-between lg:h-full w-full lg:w-1/5 animate__animated animate__bounceInUp"
        >
          <div class="xl:h-2/5 !lg:h-2/5 w-full hidden lg:flex">
            <ImageCard :image="Blogs[3].image" :blogUrl="Blogs[3].url" />
          </div>
          <div class="xl:h-3/5 lg:h-3/5 w-full mx-3 lg:mx-0">
            <TextCard :blog="Blogs[3]" />
          </div>
        </div>
        <div
          class="flex mb-6 lg:mb-0 flex-row lg:flex-col lg:gap-y-8 justify-between w-full lg:w-1/5 animate__animated animate__bounceInDown"
        >
          <div class="xl:h-3/5 lg:h-3/5 w-full mx-3 lg:mx-0">
            <TextCard :blog="Blogs[4]" />
          </div>
          <div class="xl:h-2/5 lg:h-2/5 w-full hidden lg:flex">
            <ImageCard :image="Blogs[4].image" :blogUrl="Blogs[4].url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blogs from "@/assets/Blogs.json";
import TextCard from "./TextCard.vue";
import ImageCard from "./ImageCard.vue";

export default {
  data() {
    return {
      Blogs,
    };
  },
  components: { TextCard, ImageCard },
};
</script>
