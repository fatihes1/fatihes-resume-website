<template>
  <NavBar />
  <!-- <HomeView /> -->
  <!-- <BlogView />
  <AboutView /> -->
</template>

<script>
import HomeView from "./views/HomeView.vue";
import BlogView from "./views/BlogView.vue";
import AboutView from "./views/AboutView.vue";
import NavBar from "./components/NavBar.vue";
export default { components: { HomeView, BlogView, AboutView, NavBar } };
</script>
