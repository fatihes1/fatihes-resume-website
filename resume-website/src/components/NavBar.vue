<template>
  <div
    class="container mx-auto flex justify-between w-full bg-brand_background items-center font-bold mt-2"
  >
    <div class="ml-20">
      <img class="w-20" src="../assets/logo.png" alt="logo" />
    </div>
    <div class="mr-20">
      <ul class="flex flex-row gap-x-16 text-2xl text-gray-700">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About Me</router-link>
        </li>
        <li>
          <router-link to="/skills">Skills</router-link>
        </li>
        <li>
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact & Follow Me</router-link>
        </li>
      </ul>
    </div>
  </div>

  <router-view></router-view>
</template>

<style scoped>
ul li a:hover,
ul li a.router-link-active,
ul li a.router-link-exact-active {
  color: #fdaf01;
  cursor: pointer;
}
</style>
