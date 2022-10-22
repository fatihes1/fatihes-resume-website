<template>
  <div class="flex flex-col md:flex-row">
    <div class="container mx-auto md:calc-h-full-40">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col gap-y-1 md:gap-y-3 w-full md:w-1/2">
          <div class="ml-6 md:ml-0">
            <span
              class="w-16 h-16 border-4 border-brand_green rounded-full grid place-items-center relative md:mb-4 animate-spin-slow"
            >
              <span
                class="absolute -top-6 -left-10 w-16 h-16 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
              ></span>
            </span>
          </div>
          <div
            class="font-bold text-5xl md:text-8xl ml-5 md:ml-20 mt-2 md:mt-14"
          >
            <h1 class="dark:text-gray-200">
              Hi! I am
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-brand_green to-purple-600"
                >Fatih</span
              ><span class="text-brand_orange text-2xl md:text-6xl block mt-4"
                >Software Developer</span
              >
            </h1>
          </div>
          <div class="ml-5 md:ml-20 mt-1 md:mt-4">
            <h2 class="text-gray-600 dark:text-gray-200 font-bold md:text-2xl">
              from Bursa, Turkey
            </h2>
          </div>

          <router-link
            v-wave
            to="About"
            class="bg-gradient-to-b from-brand_red2/75 to-brand_red2 w-1/2 md:w-1/4 px-5 md:px-10 py-2 md:py-4 text-center rounded-full ml-5 md:ml-20 mt-4 md:text-lg font-bold text-white animate-bounce-slow duration-300b"
          >
            DISCOVER
          </router-link>

          <div class="flex justify-end mr-10 md:mr-20 mt-7">
            <span
              class="w-10 h-10 border-4 border-brand_orange rounded-full grid place-items-center relative mb-4 animate-spin-slow"
            >
              <span
                class="absolute -bottom-10 -left-10 w-14 h-14 bg-brand_orange scale-150 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
              ></span>
            </span>
          </div>
        </div>
        <div class="flex justify-items-start w-full md:w-1/2">
          <img
            src="../assets/images/welcome.png"
            alt="welcome_header"
            class="animate__animated animate__bounceInDown"
          />
        </div>
      </div>
    </div>
  </div>
</template>
