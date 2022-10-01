<template>
  <div class="container mx-auto h-screen">
    <div class="calc-h-full-20">
      <div class="h-20 flex flex-col justify-center items-center">
        <h1
          class="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-purple-600"
        >
          Check out some of my blogs
        </h1>
        <h2 class="text-center font-medium text-lg text-gray-700 mt-2">
          Articles created in order to increase the number of resources in
          Turkish on various technological subjects.
        </h2>
      </div>
      <div class="flex flex-row gap-x-8 w-full calc-h-full-40 mt-4">
        <div
          class="flex flex-col gap-y-8 h-full w-1/5 animate__animated animate__bounceInDown"
        >
          <div class="h-3/5 w-full">
            <TextCard :blog="Blogs[0]" />
          </div>
          <div class="h-2/5">
            <ImageCard :image="Blogs[0].image" :blogUrl="Blogs[0].url" />
          </div>
        </div>
        <div
          class="flex flex-col gap-y-8 justify-between w-1/5 animate__animated animate__bounceInUp"
        >
          <div class="h-2/5">
            <ImageCard :image="Blogs[1].image" :blogUrl="Blogs[1].url" />
          </div>
          <div class="h-3/5">
            <TextCard :blog="Blogs[1]" />
          </div>
        </div>
        <div
          class="flex flex-col gap-y-8 justify-between w-1/5 animate__animated animate__bounceInDown"
        >
          <div class="h-3/5">
            <TextCard :blog="Blogs[2]" />
          </div>
          <div class="h-2/5">
            <ImageCard :image="Blogs[2].image" :blogUrl="Blogs[2].url" />
          </div>
        </div>
        <div
          class="flex flex-col gap-y-8 justify-between w-1/5 animate__animated animate__bounceInUp"
        >
          <div class="h-2/5">
            <ImageCard :image="Blogs[3].image" :blogUrl="Blogs[3].url" />
          </div>
          <div class="h-3/5">
            <TextCard :blog="Blogs[3]" />
          </div>
        </div>
        <div
          class="flex flex-col gap-y-8 justify-between w-1/5 animate__animated animate__bounceInDown"
        >
          <div class="h-3/5">
            <TextCard :blog="Blogs[4]" />
          </div>
          <div class="h-2/5">
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
