<template>
  <div class="h-screen overflow-hidden">
    <NavBar tab="About" />
    <AboutHeader />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import AboutHeader from "../components/AboutSection/AboutHeader.vue";

export default {
  //   components: ["NavBar"],
  components: { NavBar, AboutHeader },
};
</script>
