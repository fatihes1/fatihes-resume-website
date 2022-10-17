<template>
  <div class="h-screen overflow-hidden dark:bg-dark_background bg-brand_background ">
    <NavBar @dark-switch="onDarkSwitch"/>

  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data: () => ({
    darkmode: false,
  }),
  watch: {
    darkmode: function (old,val) {
      // if(localStorage.getItem('dark')) {
      //   document.documentElement.classList.add('dark');
      // }
      // else {
      //   document.documentElement.classList.remove('dark');
      // }
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('dark', true);
      } else {
        localStorage.removeItem('dark');
      }
    },
  },
  methods: {
    onDarkSwitch() {
      console.log(1);
      this.darkmode = !this.darkmode;
    },
  },
};
</script>
