<template>
  <div class="card w-96 bg-brand_green/20 shadow-xl">
    <figure class="px-6 pt-6">
      <img :src="blog.image" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ blog.title }}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>{{ blog.desc }}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">{{ blog.tags[0] }}</div>
        <div class="badge badge-outline">{{ blog.tags[1] }}</div>
      </div>
    </div>
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
