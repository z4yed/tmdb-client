<template>
  <router-view />
  <div class="app_footer">
    <Footer />
  </div>
</template>

<script>
import { Footer } from "@/components/organisms";

export default {
  components: {
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

.app_footer {
  color: $color-white-solid;
  background: $color-black-solid;
  padding-left: 75px;
}
</style>
