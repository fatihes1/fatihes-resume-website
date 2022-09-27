<template>
  <a :href="blogUrl" class="bg-white" target="_blank"
    ><img
      :src="`src/assets/images/${image}`"
      class="w-full h-full rounded-xl object-cover"
  /></a>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    blogUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
