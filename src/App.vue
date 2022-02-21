<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  watch: {
    $route(to) {
      document.title = to.meta.title + " | " + process.env.VUE_APP_TITLE;
      document.description = to.meta.description;
    },
  },
};
</script>
