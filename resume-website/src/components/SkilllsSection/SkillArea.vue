<template>
  <div class="w-full max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-brand_red2 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-semibold leading-5',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-brand_red2 focus:outline-none focus:ring-2 font-semibold',
              selected
                ? 'bg-white shadow text-brand_red2 dark:text-white dark:bg-gray-800'
                : 'text-white hover:bg-white/[0.12] hover:text-white bg-brand_red2',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white dark:bg-dark_background p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div class="flex flex-row items-center">
                <img
                  :src="`src/assets/images/programming/${post.image}.svg`"
                  class="w-10 h-10 p-1"
                  alt="avatar"
                />
                <h3
                  class="text-sm font-medium leading-5 ml-2 dark:text-gray-100"
                >
                  {{ post.title }}
                </h3>
              </div>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
  "Front End": [
    {
      id: 1,
      title: "Vue 3 : The Progressive JavaScript Framework",
      image: "vue",
    },
    {
      id: 2,
      title: "Tailwind CSS : A Utility-First CSS Framework",
      image: "tailwind-css",
    },
    {
      id: 3,
      title:
        "React / Native : A JavaScript library for building user interfaces",
      image: "react",
    },
  ],
  "Back End": [
    {
      id: 1,
      title: "Laravel : The PHP Framework for Web Artisans",
      image: "laravel",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "Django : The Web framework for perfectionists with deadlines",
      image: "django",
      commentCount: 24,
      shareCount: 12,
    },
    {
      id: 3,
      title: "Express JS : Fast, unopinionated, minimalist web framework",
      image: "nodejs",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  DevOps: [
    {
      id: 1,
      title: "AWS : Amazon Web Services",
      image: "aws",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "Docker : Build, Ship, and Run Any App, Anywhere",
      image: "docker",
      commentCount: 1,
      shareCount: 2,
    },
    {
      id: 3,
      title: "GNU Linux : The Free Operating System",
      image: "linux",
      commentCount: 1,
      shareCount: 2,
    },
  ],
  "AI/ ML": [
    {
      id: 1,
      title:
        "TensorFlow : An end-to-end open source platform for machine learning",
      image: "tensorflow",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "Seaborn / Matplotlib : Statistical data visualization",
      image: "seaborn",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>
