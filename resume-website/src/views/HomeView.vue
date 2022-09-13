<template>
  <div class="h-screen">
    <NavBar />
    <Header />
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
