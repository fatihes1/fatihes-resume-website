<template>
  <div class="w-full h-32 rounded-lg bg-neutral mockup-code">
    <div class="flex flex-row justify-between">
      <div class="w-1/6 h-full items-center justify-center flex">
        <img
          :src="blog.image"
          alt="blog image"
          class="object-contain w-full h-full rounded-tr-lg"
        />
      </div>
      <div class="w-2/6">
        <pre>HTMNL CSS</pre>
      </div>
      <div class="flex w-4/6 flex-row justify-end">
        <div class="w-2/6">
          <pre>HTMNL CSS</pre>
        </div>
        <div class="w-1/6">
          <pre>Read More..</pre>
        </div>
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
