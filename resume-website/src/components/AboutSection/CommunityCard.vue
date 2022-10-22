<template>
  <a
    v-bind:href="community.detailURL"
    target="_blank"
    v-wave="{ duration: 0.3, color: 'black' }"
    class="w-11/12 h-28 rounded-md md:rounded-2xl shadow-md md:shadow-xl hover:bg-brand_orange/60 dark:hover:bg-brand_orange transition-colors bg-brand_orange/30 dark:bg-brand_orange/90 flex flex-row gap-x-3 md:gap-x-6 items-center justify-between p-3 md:p-4 cursor-pointer"
  >
    <div class="w-3/12 items-center justify-center h-full flex">
      <img
        :src="`src/assets/images/${community.image}`"
        alt=""
        class="w-full h-full rounded-lg grid place-items-center relative object-scale-down"
      />
    </div>
    <div class="w-6/12 justify-start h-full flex flex-col">
      <h1 class="font-semibold text-gray-700 md:text-lg dark:text-gray-200">
        {{ community.title }}
      </h1>
      <a
        target="_blank"
        v-bind:href="community.detailURL"
        class="font-medium text-gray-700 text-sm hover:underline dark:text-gray-800"
      >
        <pre>$&nbsp;Show program's page  </pre>
      </a>
    </div>
    <div
      class="w-3/12 items-end h-full flex flex-col gap-y-0 dark:text-gray-100"
    >
      <h1>{{ community.start_date }}</h1>
      <h1 class="items-center">-</h1>
      <h1>{{ community.end_date }}</h1>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    community: {
      type: Object,
      required: true,
    },
  },
};
</script>
