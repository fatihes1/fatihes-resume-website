<template>
  <div
    class="w-11/12 h-28 border-2 rounded-lg border-brand_orange bg-orange-50/60 flex flex-row gap-x-6 items-center justify-between p-4"
  >
    <div class="w-3/12 items-center justify-center h-full flex">
      <img
        :src="`src/assets/images/${community.image}`"
        alt=""
        class="w-full h-full rounded-lg grid place-items-center relative object-scale-down"
      />
    </div>
    <div class="w-6/12 justify-start h-full flex flex-col">
      <h1 class="font-semibold text-gray-700 text-lg">
        {{ community.title }}
      </h1>
      <a
        target="_blank"
        v-bind:href="community.detailURL"
        class="font-medium text-gray-700 text-sm hover:underline"
      >
        <pre>$&nbsp;Show program's page  </pre>
      </a>
    </div>
    <div class="w-3/12 items-end h-full flex flex-col gap-y-0">
      <h1>Mar 2022</h1>
      <h1 class="items-center">-</h1>
      <h1>Currently</h1>
    </div>
  </div>
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
