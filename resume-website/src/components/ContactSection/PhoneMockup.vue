<template>
  <div class="mockup-phone border-primary">
    <div class="camera"></div>
    <div class="display">
      <div class="artboard artboard-demo phone-1">
        <div
          class="flex flex-col justify-between w-full h-full bg-gradient-to-tl from-purple-400/70 to-purple-100/40"
        >
          <div class="my-12 mx-5">
            <div class="flex flex-wrap gap-x-2 gap-y-8">
              <SocialIcon
                v-for="contact in contactInfo"
                :key="id"
                :icon="contact"
              />
            </div>
          </div>
          <div class="mb-10 mx-5">
            <div class="flex flex-wrap gap-x-2 gap-y-8">
              <a
                href="#"
                class="flex flex-col gap-y-1 items-center justify-center h-16 w-16 cursor-not-allowed"
                target="_blank"
              >
                <img
                  class="w-14 h-14"
                  :src="`src/assets/images/social/phone.svg`"
                />
                <h1 class="text-sm font-semibold text-gray-700">Phone</h1>
              </a>
              <a
                href="https://www.google.com/search?q=fatih+es&oq=fatih+es&aqs=chrome..69i57j0i131i433i512j46i131i433i512j69i60l5.3978j0j4&client=ubuntu&sourceid=chrome&ie=UTF-8"
                class="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                target="_blank"
              >
                <img
                  class="w-14 h-14"
                  :src="`src/assets/images/social/safari.svg`"
                />
                <h1 class="text-sm font-semibold text-gray-700">Safari</h1>
              </a>
              <a
                href="mailto:develop.fatihes@gmail.com"
                class="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                target="_blank"
              >
                <img
                  class="w-14 h-14"
                  :src="`src/assets/images/social/mail.svg`"
                />
                <h1 class="text-sm font-semibold text-gray-700">Mail</h1>
              </a>
              <a
                href="https://open.spotify.com/user/r0g28k6i5dkyn0bxdytn8do8e"
                class="flex flex-col gap-y-1 items-center justify-center h-16 w-16"
                target="_blank"
              >
                <img
                  class="w-14 h-14"
                  :src="`src/assets/images/social/spotify.svg`"
                />
                <h1 class="text-sm font-semibold text-gray-700">Spotify</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "./SocialIcon.vue";
import ContactInfo from "@/assets/ContactInfo.json";

export default {
  components: {
    SocialIcon,
  },
  data() {
    return {
      contactInfo: ContactInfo,
    };
  },
};
</script>
