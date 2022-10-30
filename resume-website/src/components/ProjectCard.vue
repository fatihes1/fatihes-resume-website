<template>
  <a :href="project.url" target="_blank">
    <div
      class="hover:cursor-pointer overflow-hidden transition duration-300 transform rounded-2xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
    >
      <div
        class="object-cover w-full h-1/2 md:h-64 xl:h-80 bg-gradient-to-b from-brand_green/80 to-brand_green/40 dark:from-brand_green_soft dark:to-brand_green_soft/70 flex justify-center items-center"
        alt="Person"
      >
        <div class="p-8 flex flex-col gap-y-10 justify-center items-center">
          <div class="flex flex-col">
            <h1 class="text-white font-bold lg:text-2xl text-4xl text-center">
              {{ project.title }}
            </h1>
            <div>
              <!-- <img src="@/assets/images/programming/computer.webp" class="h-28" /> -->
            </div>
          </div>
          <div
            class="flex flex-row lg:gap-x-1 gap-x-2 justify-center items-center align-middle bg-yellow-100 px-6 py-3 lg:py-3 rounded-xl"
          >
            <img
              v-for="icons in project.techs"
              class="w-10 h-10 align-middle lg:w-6 lg:h-6"
              :src="`src/assets/images/programming/${icons}.svg`"
            />
            <!-- <img class="icons" src="@/assets/images/programming/socket.svg" />
            <img class="icons" src="@/assets/images/programming/vue.svg" />
            <img class="icons" src="@/assets/images/programming/node-js.svg" />
            <img class="icons" src="@/assets/images/programming/node-js.svg" /> -->
          </div>
        </div>
      </div>
      <div
        class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-80 opacity-0 hover:opacity-100"
      >
        <p class="mb-1 text-lg font-extrabold text-gray-100 lg:text-sm">
          {{ project.title }}
        </p>
        <p class="mb-4 tracking-wide font-medium text-gray-400 lg:text-xs">
          {{ project.description }}
        </p>
        <div class="flex flex-col items-center justify-center space-x-3">
          <a
            :href="project.url"
            target="_blank"
            class="text-white transition-colors duration-300 hover:text-teal-accent-400"
          >
            <img
              class="w-10 h-10"
              src="@/assets/images/programming/github.svg"
            />
          </a>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
