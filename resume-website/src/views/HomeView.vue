<template>
  <div>
    <NavBar />
    <div
      class="flex flex-col gap-y-16 font-extrabold justify-center items-center text-9xl"
    >
      <h1
        class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        Hey there 👋
      </h1>
      <h1
        class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"
      >
        I'm Fatih
      </h1>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  //   components: ["NavBar"],
  components: { NavBar },
};
</script>
