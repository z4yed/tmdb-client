<template>
  <div class="top_casts">
    <h2 class="top_casts__title">Top casts</h2>
    <Swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: TOP_CASTS_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="top_casts__movies"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide v-for="cast in casts" :key="cast.id">
        <Cast :cast="cast" />
      </swiper-slide>
    </Swiper>
  </div>
</template>
<script>
import { TOP_CASTS_AUTOPLAY_DURATION } from "../../../utils/constants";
import { Cast } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

import { Autoplay } from "swiper/modules";

export default {
  props: {
    casts: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Cast,
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
      modules: [Autoplay],
      TOP_CASTS_AUTOPLAY_DURATION,
      getRef,
      slideToNext,
    };
  },
};
</script>

<style lang="scss">
.top_casts {
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
    padding: 8px 20px;
    height: 52px;
  }
}
</style>
