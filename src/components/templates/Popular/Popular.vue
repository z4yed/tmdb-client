<template>
  <div class="popular">
    <h2 class="popular__title">Popular of the week</h2>
    <Swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: POPULAR_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="just_release__movies"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide key="1">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="2">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="3">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="4">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="5">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="6">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="7">
        <PopularMovie />
      </swiper-slide>
      <swiper-slide key="8">
        <PopularMovie />
      </swiper-slide>
    </Swiper>
  </div>
</template>
<script>
import { POPULAR_AUTOPLAY_DURATION } from "../../../utils/constants";
import { PopularMovie } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PopularMovie,
  },

  setup() {
    const swiper = ref(null);
    function getRef(swiperInstance) {
      swiper.value = swiperInstance;
    }

    function slideToNext() {
      swiper.value.slideNext(); // should work
    }

    return {
      modules: [Autoplay],
      POPULAR_AUTOPLAY_DURATION,
      getRef,
      slideToNext,
    };
  },
};
</script>

<style lang="scss">
.popular {
  position: relative;
  padding-top: 72px;

  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.12px;
  }

  &__movies {
    margin-top: 24px;

    .swiper-slide {
      width: unset;
    }
  }

  .right_navigation {
    @extend .right_navigation;
    height: 130px;
  }
}
</style>
