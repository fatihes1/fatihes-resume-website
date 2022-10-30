<template>
  <div>
    <Blogs
      class="h-full lg:calc-h-full-20 xl:mt-5 lg:overflow-y-auto overflow-x-hidden sm:px-5 lg:mt-20"
    />
  </div>
</template>

<script>
import Blogs from "../components/BlogSection/Blogs.vue";
export default {
  components: { Blogs },
};
</script>
