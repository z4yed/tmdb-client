<template>
  <button class="m__button">
    <img v-bind:src="getImageUrl()" alt="" class="m__button-icon" />
    <span class="m__button-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    imageSource: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  setup(props) {
    const images = require.context(
      "../../../assets/images/icons",
      false,
      /\.(png|jpg|jpeg|gif|svg)$/
    );

    function getImageUrl() {
      return images("./" + props.imageSource);
    }

    return {
      getImageUrl,
    };
  },
};
</script>

<style lang="scss">
.m__button {
  padding: 12px 24px;
  background: transparent;
  color: $color-white-solid;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid $color-white-solid;
  border-radius: 12px;

  &:hover {
    background: $color-green;
    cursor: pointer;
    border: 1px solid transparent;
  }

  span {
    color: $color-white-solid;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.07px;
  }

  @include respond-to("<medium") {
    padding: 8px;
    color: $color-white-solid;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid $color-white-solid;
    border-radius: 8px;

    &:hover {
      background: $color-green;
      cursor: pointer;
      border: 1px solid transparent;
    }

    span {
      color: $color-white-solid;
      white-space: nowrap;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px; /* 157.143% */
      letter-spacing: 0.07px;
    }
  }
}
</style>
