<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
<script>
import Navbar from "@/components/frontend/Nav";
import Footer from "@/components/frontend/Foot";
export default {
  name: "FrontendLayout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
