<template>
  <div class="h-screen overflow-hidden">
    <!-- <NavBar tab="Home" /> -->
    <Header class="calc-h-full-20 mt-10" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";

export default {
  //   components: ["NavBar"],
  components: { NavBar, Header },
};
</script>
