<template>
  <a
    v-bind:href="icon.url"
    class="flex flex-col gap-y-1 items-center justify-center h-16 w-16 hover:animate-bounce-slow transition-all"
    target="_blank"
  >
    <img
      class="w-12 h-12"
      :src="`src/assets/images/social/${icon.image}.svg`"
    />
    <h1 class="text-sm font-semibold text-gray-700">{{ icon.name }}</h1>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },
};
</script>
