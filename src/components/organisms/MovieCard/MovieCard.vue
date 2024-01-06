<template>
  <div class="movie_card" :class="isCompact ? 'compact' : ''">
    <div class="movie_card__thumbnail">
      <img
        src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div class="movie_card__description">
      <div class="movie_card__description-title">No mercy</div>
      <div class="movie_card__description-ratings">
        <Ratings :value="4.9" :genreTexts="['Horror • Thriller']" />
      </div>
    </div>
    <div v-if="isCompact == false" class="movie_card__favourite">
      <img src="../../../assets/images/icons/heart.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { Ratings } from "..";
export default {
  props: {
    isCompact: {
      type: Boolean,
      required: false,
    },
  },
  components: { Ratings },
};
</script>

<style lang="scss">
$root: ".movie_card";
#{$root} {
  width: 280px;
  height: 412px;
  position: relative;

  &__thumbnail {
    position: absolute;
    z-index: 1;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  &__description {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    width: 280px;
    height: 116px;
    padding: 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
    z-index: 2;

    border-radius: 0px 0px 16px 16px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 78.02%);

    &-title {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 150% */
    }
  }

  &__favourite {
    position: absolute;
    z-index: 4;
    top: 20px;
    right: 20px;

    img {
      cursor: pointer;
    }
  }
}

.compact {
  height: unset;
  width: unset;

  #{$root}__thumbnail {
    position: unset;
    img {
      height: 183px;
      width: 280px;
    }
  }

  #{$root}__description {
    margin-top: 12px;
    position: unset;
    height: unset;
    width: unset;
    padding: 0;
  }
}
</style>
