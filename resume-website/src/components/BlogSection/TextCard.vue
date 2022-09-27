<template>
  <div
    class="w-full h-full bg-red-300/50 rounded-xl p-5 flex flex-col justify-around"
  >
    <h1 class="text-2xl font-semibold text-center text-gray-700">
      {{ blog.title }}
    </h1>
    <h1 class="text-lg">{{ blog.desc }}</h1>
    <div class="flex flex-row gap-x-2 justify-center">
      <span class="border border-gray-600 px-3 py-1 rounded-full">{{
        blog.tags[0]
      }}</span>
      <span class="border border-gray-600 px-2 py-1 rounded-full">{{
        blog.tags[1]
      }}</span>
      <span class="border border-gray-600 px-2 py-1 rounded-full">{{
        blog.tags[2]
      }}</span>
    </div>

    <a v-bind:href="blog.url" target="_blank" class="text-right hover:underline"
      >Read more...</a
    >
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>
