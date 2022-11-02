<template>
  <div
    class="fixed-top container hidden lg:flex dark:bg-dark_background mx-auto justify-between w-full bg-brand_background items-center font-bold mt-2 h-20"
  >
    <div class="ml-20">
      <router-link to="/">
        <img
          class="w-28 lg:w-20 xl:w-28 dark:hidden"
          src="../assets/images/es.png"
          alt="logo"
        />
        <img
          class="w-28 lg:w-20 xl:w-28 hidden dark:inline-block"
          src="../assets/images/es_white.png"
          alt="logo "
        />
      </router-link>
    </div>
    <div class="mr-20">
      <ul
        class="flex flex-row lg:gap-x-8 lg:text-lg xl:text-2xl lg:text-center gap-x-16 text-2xl text-gray-700 dark:text-gray-200 items-center"
      >
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

        <li>
          <label class="swap swap-rotate p-2 rounded-md">
            <!-- this hidden checkbox controls the state -->
            <input @click="toggleDarkMode" type="checkbox" />
            <!-- sun icon -->
            <svg
              class="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>
            <!-- moon icon -->
            <svg
              class="swap-off dark:fill-gray-200 fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </label>
        </li>
      </ul>
    </div>
  </div>

  <div class="drawer drawer-end lg:hidden">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <!-- Page content here -->
      <!-- <label for="my-drawer-4" class="">Open drawer</label> -->
      <div
        class="fixed-top flex mb-80 flex-row items-center justify-between px-4 pt-2 bg-brand_background dark:bg-dark_background"
      >
        <label for="my-drawer-4" class="btn btn-circle swap swap-rotate">
          <!-- this hidden checkbox controls the state -->

          <!-- hamburger icon -->
          <svg
            class="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path
              d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
            />
          </svg>

          <!-- close icon -->
          <svg
            class="swap-on fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            />
          </svg>
        </label>
        <router-link to="/">
          <img
            class="w-24 dark:hidden"
            src="../assets/images/es.png"
            alt="logo"
          />
          <img
            class="w-24 hidden dark:inline-block"
            src="../assets/images/es_white.png"
            alt="logo "
          />
        </router-link>
        <label class="swap swap-rotate p-2 rounded-md">
          <!-- this hidden checkbox controls the state -->
          <input @click="toggleDarkMode" type="checkbox" />

          <!-- sun icon -->
          <svg
            class="swap-off dark:fill-gray-200 fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
          <!-- moon icon -->
          <svg
            class="swap-on dark:fill-gray-200 fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
      <router-view
        class="h-full pt-32 sm:pt-32 md:pt-20 sm:h-full lg:calc-h-full-20"
        v-slot="{ Component }"
      >
        <transition
          enter-active-class="animate__animated animate__fadeInRightBig animate__faster"
          leave-active-class="animate__animated animate__fadeOutLeftBig animate__faster"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <div class="drawer-side">
      <label for="my-drawer-4" class="drawer-overlay"></label>
      <ul
        class="menu p-4 overflow-y-auto w-80 text-base-content bg-brand_background dark:bg-dark_background pt-20"
      >
        <!-- Sidebar content here -->
        <ul
          class="flex flex-col gap-y-5 text-2xl text-gray-700 dark:text-gray-200 items-center"
        >
          <li>
            <label for="my-drawer-4"> X </label>
          </li>
          <li class="focus:bg-slate-50">
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
          <li class="text-sm -mt-4">Created by Fatih ES © 2022</li>
          <!-- <li>
            <label class="swap swap-rotate p-2 rounded-md">
              
              <input @click="toggleDarkMode" type="checkbox" />
              
              <svg
                class="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                />
              </svg>
              
              <svg
                class="swap-off dark:fill-gray-200 fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
              </svg>
            </label>
          </li> -->
        </ul>
      </ul>
    </div>
  </div>

  <router-view
    class="h-full sm:h-full md:calc-h-full-20 lg:h-screen hidden lg:flex"
    v-slot="{ Component }"
  >
    <transition
      enter-active-class="animate__animated animate__fadeInRightBig animate__faster"
      leave-active-class="animate__animated animate__fadeOutLeftBig animate__faster"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
export default {
  methods: {
    toggleDarkMode() {
      this.$emit("dark-switch");
    },
  },
};
</script>

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
