<template>
  <div class="container mx-auto">
    <div>
      <h1
        class="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-purple-600"
      >
        My Blogs about Tech
      </h1>
      <h2 class="text-center text-base text-gray-500 mt-2">
        Articles created in order to increase the number of resources in Turkish
        on various technological subjects.
      </h2>
      <div class="mt-4 flex flex-col mx-auto gap-y-3">
        <Card v-for="blog in Blogs" :blog="blog" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Blogs from "@/assets/Blogs.json";

export default {
  components: { Card },
  data() {
    return {
      Blogs,
    };
  },
};
</script>
