<template>
  <div class="recommendation">
    <h2 class="recommendation__title">Similar Movies For You</h2>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: RECOMMENDATION_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="recommendation__movies"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide>
        <MovieCard key="1" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="2" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="3" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="4" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="5" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="6" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="7" :isCompact="true" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="8" :isCompact="true" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { RECOMMENDATION_AUTOPLAY_DURATION } from "../../../utils/constants";
import { MovieCard } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

// import required modules
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MovieCard,
  },
  setup() {
    const swiper = ref(null);
    function getRef(swiperInstance) {
      swiper.value = swiperInstance;
    }

    function slideToNext() {
      swiper.value.slideNext();
    }
    return {
      getRef,
      slideToNext,
      modules: [Autoplay],
      RECOMMENDATION_AUTOPLAY_DURATION,
    };
  },
};
</script>

<style lang="scss">
.recommendation {
  padding-top: 80px;

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
    height: 256px;
  }
}
</style>
