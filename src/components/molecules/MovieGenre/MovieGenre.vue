<template>
  <div class="genres">
    <span v-if="hasLeadingSlash" class="genres__slash">|</span>
    <span v-for="item in items" :key="item" class="genres__text">{{
      item
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    hasLeadingSlash: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.genres {
  span {
    color: $color-gray;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 183.333% */
    letter-spacing: 0.06px;
  }
  &__slash {
    margin-right: 4px;
  }
}
</style>
