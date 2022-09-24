<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex flex-col gap-y-3 w-1/2">
        <div>
          <span
            class="w-16 h-16 border-4 border-brand_green rounded-full grid place-items-center relative mb-4"
          >
            <span
              class="absolute -top-6 -left-10 w-16 h-16 bg-brand_green scale-95 rounded-full -z-1 bg-opacity-25"
            ></span>
          </span>
        </div>
        <div class="font-bold text-8xl ml-20 mt-14">
          <h1>
            Hi! I am
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-brand_green to-purple-600"
              >Fatih</span
            ><span class="text-brand_orange text-6xl block mt-4"
              >Software developer</span
            >
          </h1>
        </div>
        <div class="ml-20 mt-4">
          <h2 class="text-gray-600 font-bold text-2xl">from Bursa, Turkey</h2>
        </div>

        <a
          href="/"
          class="bg-gradient-to-b from-brand_orange/80 to-brand_orange w-1/4 px-10 py-4 text-center rounded-full ml-20 mt-4 text-lg font-bold text-white animate-bounce duration-300b"
        >
          DISCOVER
        </a>

        <div class="flex justify-end mr-20 mt-7">
          <span
            class="w-10 h-10 border-4 border-brand_orange rounded-full grid place-items-center relative mb-4"
          >
            <span
              class="absolute -bottom-10 -left-10 w-14 h-14 bg-brand_orange scale-150 rounded-full -z-1 bg-opacity-25"
            ></span>
          </span>
        </div>
      </div>
      <div class="flex justify-items-start w-1/2">
        <img src="../assets/welcome.png" alt="welcome_header" />
      </div>
    </div>
  </div>
</template>
