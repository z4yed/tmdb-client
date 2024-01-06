<template>
  <div class="ratings">
    <img src="../../../assets/images/icons/star.png" alt="" />
    <div class="ratings__value">{{ value }}</div>
    <MovieGenre :items="genreTexts" :hasLeadingSlash="true" />
  </div>
</template>

<script>
import { MovieGenre } from "@/components/molecules";

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    genreTexts: {
      type: Array,
      required: true,
    },
  },
  components: {
    MovieGenre,
  },
  setup(props) {},
};
</script>

<style lang="scss">
.ratings {
  display: flex;
  align-items: center;
  gap: 4px;

  &__value {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 183.333% */
    letter-spacing: 0.06px;
  }
}
</style>
