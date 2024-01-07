<template>
  <div class="just_release">
    <h2 class="just_release__title">Just Release</h2>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: JUST_RELEASE_AUTOPLAY_DURATION,
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

      <swiper-slide>
        <MovieCard key="1" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="2" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="3" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="4" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="5" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="6" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="7" />
      </swiper-slide>
      <swiper-slide>
        <MovieCard key="8" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { JUST_RELEASE_AUTOPLAY_DURATION } from "../../../utils/constants";
import { MovieCard } from "@/components/organisms";

import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

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
      swiper.value.slideNext(); // should work
    }

    return {
      modules: [Autoplay],
      JUST_RELEASE_AUTOPLAY_DURATION,
      getRef,
      slideToNext,
    };
  },
};
</script>

<style lang="scss">
.just_release {
  padding-top: 75px;

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
    height: 412px;
  }
}
</style>
