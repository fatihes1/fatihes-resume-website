<template>
  <div>
    <div class="flex items-center">
      <img
        :src="`src/assets/images/skills/${skillInfo.images}`"
        class="w-40 h-40 object-contain"
      />
    </div>
    <div>
      <h6 class="mb-4 text-xl font-semibold leading-5">
        {{ skillInfo.mainTitle }}
      </h6>
      <!-- <p class="mb-3 text-sm text-gray-900">
        {{ skillInfo.description }}
      </p> -->
    </div>
    <div>
      <ul class="mb-4 -ml-1 space-y-2">
        <li
          class="flex items-start hover:cursor-pointer hover:font-semibold hover:text-amber-600"
          v-for="skill in skillInfo.skills"
        >
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
    </div>
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
