<template>
  <div class="h-screen overflow-hidden">
    <!-- <NavBar tab="Blog" /> -->
    <Blogs />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Blogs from "../components/BlogSection/Blogs.vue";
export default {
  components: { NavBar, Blogs },
};
</script>
