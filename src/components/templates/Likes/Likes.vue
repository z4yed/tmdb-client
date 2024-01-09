<template>
  <div class="likes">
    <h2 class="likes__title">Your Likes</h2>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      v-if="favoriteSeriesList.length"
      :autoplay="{
        delay: LIKES_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="likes__series"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide v-for="series in favoriteSeriesList" :key="series.id">
        <SeriesCard :series="series" :isCompact="true" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { LIKES_AUTOPLAY_DURATION } from "../../../utils/constants";
import { SeriesCard } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed } from "vue";
import { Autoplay } from "swiper/modules";
import { useStore } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SeriesCard,
  },
  setup() {
    const swiper = ref(null);
    const store = useStore();

    const favoriteSeriesList = computed(() => {
      return store.state.favoriteList;
    });

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
      LIKES_AUTOPLAY_DURATION,
      favoriteSeriesList,
    };
  },
};
</script>

<style lang="scss">
.likes {
  padding-top: 85px;

  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: 0.12px;
  }

  &__series {
    margin-top: 24px;

    .swiper-slide {
      width: unset;
    }
  }

  .right_navigation {
    @extend .right_navigation;
    height: 256px;
  }

  @include respond-to("<medium") {
    padding-top: 30px;

    &__title {
      font-size: 22px;
    }

    &__series {
      margin-top: 18px;
    }

    .right_navigation {
      @extend .right_navigation;
      height: 256px;
    }
  }
}
</style>
