<template>
  <div class="container mx-auto">
    <div></div>
    <div>
      <h1
        class="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-purple-600"
      >
        My Blogs about Tech
      </h1>
      <div class="flex flex-col justify-between mt-3">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: { Card },
  data() {
    return {
      tags: ["deneme", "deneme"],
    };
  },
};
</script>
