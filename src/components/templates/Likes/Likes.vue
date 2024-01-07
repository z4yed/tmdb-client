<template>
  <div class="likes">
    <h2 class="likes__title">Your Likes</h2>
    <swiper
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: LIKES_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="likes__movies"
    >
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
import { LIKES_AUTOPLAY_DURATION } from "../../../utils/constants";
import { MovieCard } from "@/components/organisms";

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
    return {
      modules: [Autoplay],
      LIKES_AUTOPLAY_DURATION,
    };
  },
};
</script>

<style lang="scss">
.likes {
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
}
</style>
