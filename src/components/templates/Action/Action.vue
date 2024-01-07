<template>
  <div class="action">
    <h2 class="action__title">Action</h2>
    <swiper
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: ACTION_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="action__movies"
    >
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
import { ACTION_AUTOPLAY_DURATION } from "../../../utils/constants";
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
      ACTION_AUTOPLAY_DURATION,
    };
  },
};
</script>

<style lang="scss">
.action {
  padding-top: 54px;

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
