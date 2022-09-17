<template>
  <div
    class="container mx-auto flex justify-between w-full h-20 bg-brand_background items-center font-bold mt-2"
  >
    <div class="ml-20">
      <img class="w-20" src="../assets/logo.png" alt="logo" />
    </div>
    <div class="mr-20">
      <ul class="flex flex-row gap-x-16 text-2xl text-gray-700">
        <li v-bind:class="[tabInfo == 'Home' ? 'text-brand_orange' : null]">
          <a href="/">Home</a>
        </li>
        <li v-bind:class="[tabInfo == 'About' ? 'text-brand_orange' : null]">
          <a href="/">About Me</a>
        </li>
        <li v-bind:class="[tabInfo == 'Skills' ? 'text-brand_orange' : null]">
          <a href="/">Skills</a>
        </li>
        <li v-bind:class="[tabInfo == 'Blog' ? 'text-brand_orange' : null]">
          <a href="/">Blogs</a>
        </li>
        <li v-bind:class="[tabInfo == 'Project' ? 'text-brand_orange' : null]">
          <a href="/">Projects</a>
        </li>
        <li v-bind:class="[tabInfo == 'Contact' ? 'text-brand_orange' : null]">
          <a href="/">Contact & Follow Me</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: { tab: { type: String, default: "Home" } },
  data() {
    return { tabInfo: this.tab };
  },
};
</script>
