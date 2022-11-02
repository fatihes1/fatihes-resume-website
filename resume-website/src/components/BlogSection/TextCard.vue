<template>
  <div
    class="w-full h-full bg-red-300/50 dark:bg-red-400/80 rounded-xl p-5 lg:p-3 flex flex-col justify-around"
  >
    <h1
      class="text-2xl lg:text-lg xl:text-2xl font-semibold text-center lg:pt-2 text-gray-900 dark:text-gray-100"
    >
      {{ blog.title }}
    </h1>
    <h1
      class="text-lg xl:text-lg lg:text-base text-gray-800 dark:text-gray-200"
    >
      {{ blog.desc }}
    </h1>
    <div
      class="flex flex-row lg:flex-col xl:flex-row lg:gap-y-2 gap-x-2 justify-center text-sm font-semibold dark:text-gray-100"
    >
      <span
        class="border-2 lg:border border-gray-600 dark:border-gray-200 px-3 py-1 rounded-full lg:text-xs xl:text-base xl:border-2 xl:font-semibold"
        >{{ blog.tags[0] }}</span
      >
      <span
        class="border-2 lg:border border-gray-600 dark:border-gray-200 px-2 py-1 rounded-full lg:text-xs xl:text-base xl:border-2 xl:font-semibold"
        >{{ blog.tags[1] }}</span
      >
      <span
        class="border-2 lg:border border-gray-600 dark:border-gray-200 px-2 py-1 rounded-full lg:text-xs xl:text-base xl:border-2 xl:font-semibold"
        >{{ blog.tags[2] }}</span
      >
    </div>

    <a
      v-wave="{ duration: 0.9, color: 'black' }"
      v-bind:href="blog.url"
      target="_blank"
      class="text-right hover:underline dark:text-gray-100 lg:text-center"
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
