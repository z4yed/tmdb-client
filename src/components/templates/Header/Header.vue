<template>
  <div class="header">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import { Navbar, Hero } from "@/components/organisms";

export default {
  components: {
    Navbar,
    Hero,
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  min-height: 648px;
}
</style>
