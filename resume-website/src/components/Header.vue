<template>
  <div class="flex lg:mx-auto flex-col lg:flex-row">
    <div class="container mx-auto lg:calc-h-full-40">
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col gap-y-1 lg:gap-y-3 w-full lg:w-1/2">
          <div class="ml-6 lg:ml-0">
            <span
              class="w-16 h-16 border-4 border-brand_green rounded-full grid place-items-center relative lg:mb-4 animate-spin-slow"
            >
              <span
                class="absolute -top-6 -left-10 w-16 h-16 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
              ></span>
            </span>
          </div>
          <div
            class="font-bold text-5xl sm:text-center lg:text-start lg:text-6xl ml-5 lg:ml-20 mt-2 lg:mt-14"
          >
            <h1 class="dark:text-gray-200">
              Hi! I am
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-brand_green to-purple-600"
                >Fatih</span
              ><span
                class="text-brand_orange lg:text-start lg:text-4xl text-2xl block mt-4"
                >Software Developer</span
              >
            </h1>
          </div>
          <div class="ml-5 lg:ml-20 mt-1 lg:mt-4 sm:text-center lg:text-start">
            <h2 class="text-gray-600 dark:text-gray-200 font-bold lg:text-2xl">
              from Bursa, Turkey
            </h2>
          </div>

          <router-link
            v-wave
            to="About"
            class="lg:text-sm bg-gradient-to-b sm:mx-auto from-brand_red2/75 to-brand_red2 w-1/2 lg:w-1/2 px-5 lg:px-10 py-2 lg:py-4 text-center rounded-full ml-5 lg:ml-20 mt-4 font-bold text-white animate-bounce-slow duration-300b"
          >
            DISCOVER
          </router-link>

          <div class="flex justify-end mr-10 lg:mr-20 mt-7">
            <span
              class="w-10 h-10 border-4 border-brand_orange rounded-full grid place-items-center relative mb-4 animate-spin-slow"
            >
              <span
                class="absolute -bottom-10 -left-10 w-14 h-14 bg-brand_orange scale-150 rounded-full -z-1 bg-opacity-25 dark:bg-opacity-100"
              ></span>
            </span>
          </div>
        </div>
        <div
          class="flex lg:justify-items-start sm:w-4/5 sm:mx-auto lg:w-1/2 lg:h-2/3 lg:my-auto"
        >
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
