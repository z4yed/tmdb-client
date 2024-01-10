<template>
  <div class="not_found">
    <Navbar :solidBg="true" />
    <div class="not_found__content">
      <h3>404 Not Found</h3>
    </div>
  </div>
</template>

<script>
import { Navbar } from "@/components/organisms";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.not_found {
  min-height: 80vh;
  color: $color-white-solid;
  background: $color-black-solid;

  &__content {
    padding: 60px 75px;

    h3 {
      font-size: 32px;
      text-align: center;
    }
  }

  @include respond-to("<medium") {
    &__content {
      margin-top: 60px;
      h3 {
        font-size: 32px;
      }
    }
  }
}
</style>
