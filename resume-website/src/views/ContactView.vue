<template>
  <div
    class="md:calc-h-full-20 overflow-y-auto overflow-x-hidden md:overflow-hidden mb-8 md:mb-0"
  >
    <div class="container mx-auto mt-4 md:mt-14">
      <div class="flex flex-col md:flex-row justify-center">
        <div class="w-full md:w-1/2 flex justify-end">
          <PhoneMockup class="animate__animated animate__fadeInLeftBig" />
        </div>
        <div
          class="w-full md:w-1/2 flex flex-col items-start animate__animated animate__fadeInRightBig"
        >
          <h1
            class="text-5xl mt-5 md:mt-0 font-bold text-center md:text-left text-gray-700 dark:text-purple-700"
          >
            Get in Touch With Me!
          </h1>
          <div class="mx-auto md:mx-0">
            <img
              src="@/assets/images/hand3.png"
              alt="hand"
              class="w-full animate__animated hidden md:flex animate__shakeX animate__infinite infinite animate__slower 3s"
            />
            <img
              src="@/assets/images/hand2.png"
              alt="hand"
              class="w-full animate-bounce-slow mt-8 md:hidden mx-auto"
            />
          </div>
          <div
            class="flex flex-col mx-4 md:mx-0 text-center md:text-left items-center md:items-start gap-y-6 mt-5"
          >
            <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-100">
              Hello, you can get in touch with me via the phone connections on
              the side. You are free to enquire about whatever you are
              interested in, solicit advise from others, and of course, offer
              your own.
            </h2>
            <h2 class="text-2xl font-medium text-gray-600 dark:text-gray-100">
              Please click the button below to view my CV if you are thinking
              about hiring me.
            </h2>
            <div class="text-center">
              <a
                v-wave
                href="#"
                aria-label=""
                class="inline-flex w-full h-10 px-10 py-5 border-2 items-center font-semibold transition-colors duration-200 rounded-lg bg-base-100 dark:bg-purple-700 dark:text-gray-50 dark:hover:bg-slate-50 dark:hover:text-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white border-purple-700 hover:border-purple-700"
              >
                Show CV
                <svg
                  class="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneMockup from "@/components/ContactSection/PhoneMockup.vue";
export default {
  components: {
    PhoneMockup,
  },
};
</script>
