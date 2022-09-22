<template>
  <div class="w-full h-32 rounded-lg mockup-code overflow-x-hidden">
    <div class="flex flex-row justify-between h-20 w-full">
      <div class="w-1/6">
        <figure>
          <img :src="blog.image" alt="blog image" class="w-full h-full" />
        </figure>
      </div>
      <div class="w-3/6">
        <pre
          data-prefix="$"
          class="text-success"
        ><code >npm install {{blog.title}}</code></pre>
        <pre
          data-prefix=">"
          class="text-gray-400"
        ><code >{{ blog.desc }}</code></pre>
      </div>
      <div class="flex w-2/6 flex-row justify-center">
        <div class="w-2/3">
          <pre
            class=""
          ><code>Keywords: {{blog.tags[0]}}, {{blog.tags[1]}}</code></pre>
        </div>
        <div class="w-1/3">
          <a :href="blog.url" target="_blank">
            <pre class="text-warning underline-offset-1">Read More.. </pre>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>
