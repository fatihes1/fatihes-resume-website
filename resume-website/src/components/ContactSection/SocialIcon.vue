<template>
  <a v-bind:href="{ icon.url }">
    <img class="icons" :src="`src/assets/images/social/${icon.image}.svg`" />
    <h1>{icon.title}</h1>
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
