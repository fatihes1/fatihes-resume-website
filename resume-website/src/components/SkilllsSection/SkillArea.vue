<template>
  <div>
    <div class="flex items-center">
      <!-- <svg
        class="w-7 h-7 text-deep-purple-accent-400"
        stroke-linecap="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <circle
          cx="11"
          cy="13"
          fill="none"
          r="9"
          stroke="currentColor"
        ></circle>
        <path
          d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
          stroke="currentColor"
          fill="none"
        ></path>
      </svg> -->
      <img
        :src="`src/assets/images/skills/${skillInfo.images}`"
        class="w-40 h-40 object-contain"
      />
    </div>
    <h6 class="mb-2 font-semibold leading-5">{{ skillInfo.mainTitle }}</h6>
    <p class="mb-3 text-sm text-gray-900">
      {{ skillInfo.description }}
    </p>
    <ul class="mb-4 -ml-1 space-y-2">
      <li class="flex items-start" v-for="skill in skillInfo.skills">
        <span class="mr-1">
          <svg
            class="w-5 h-5 mt-px text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            ></polygon>
          </svg>
        </span>
        {{ skill }}
      </li>
    </ul>
    <a
      :href="skillInfo.url"
      target="_blank"
      aria-label=""
      class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      >Learn more</a
    >
  </div>
</template>

<script>
export default {
  props: {
    skillInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
