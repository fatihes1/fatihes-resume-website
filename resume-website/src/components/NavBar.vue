<template>
  <div
    class="container mx-auto flex justify-between w-full h-20 bg-brand_background items-center font-bold mt-2"
  >
    <div class="ml-20">
      <img class="w-20" src="../assets/logo.png" alt="logo" />
    </div>
    <div class="mr-20">
      <ul class="flex flex-row gap-x-16 text-2xl text-gray-700">
        <li v-bind:class="[tabInfo == 'home' ? 'text-brand_orange' : null]">
          <!-- <a href="/">Home</a> -->
          <router-link to="/">Home</router-link>
        </li>
        <li v-bind:class="[tabInfo == 'about' ? 'text-brand_orange' : null]">
          <!-- <a href="/">About Me</a> -->
          <router-link to="/about" :tab="About">About Me</router-link>
        </li>
        <li v-bind:class="[tabInfo == 'Skills' ? 'text-brand_orange' : null]">
          <a href="/">Skills</a>
          <!-- <router-link to="/skills">Skills</router-link> -->
        </li>
        <li v-bind:class="[tabInfo == 'Blog' ? 'text-brand_orange' : null]">
          <a href="/">Blogs</a>
          <!-- <router-link to="/blogs">Blogs</router-link> -->
        </li>
        <li v-bind:class="[tabInfo == 'Project' ? 'text-brand_orange' : null]">
          <a href="/">Projects</a>
          <!-- <router-link to="/projects">Projects</router-link> -->
        </li>
        <li v-bind:class="[tabInfo == 'Contact' ? 'text-brand_orange' : null]">
          <a href="/">Contact & Follow Me</a>
          <!-- <router-link to="/contact">Contact & Follow Me</router-link> -->
        </li>
      </ul>
    </div>
  </div>
  {{ tabInfo }}
  <router-view></router-view>
</template>

<script>
let { pathname } = window.location;
pathname = pathname.substring(1) ? pathname.substring(1) : "home";
console.log(pathname);

export default {
  props: { tab: { type: String, default: "Home" } },
  data() {
    return { tabInfo: pathname };
  },
};
</script>
