<template>
  <div
    class="container mx-auto flex justify-between w-full bg-brand_background items-center font-bold mt-2 h-20"
  >
    <div class="ml-20">
      <img class="w-20" src="../assets/images/logo.png" alt="logo" />
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

  <router-view class="calc-h-full-20" v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeInRightBig animate__faster"
      leave-active-class="animate__animated animate__fadeOutLeftBig animate__faster"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
ul li a:hover {
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
  color: #fb4f6e;
  /* transition: 1s; */
}

ul li a.router-link-active,
ul li a.router-link-exact-active {
  color: #fdaf01;
  cursor: pointer;
  transition: 0.6s;
}
</style>
