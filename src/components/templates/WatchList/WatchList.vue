<template>
  <div class="watch_list">
    <h2 class="watch_list__title">Your Watchlist</h2>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      :autoplay="{
        delay: WATCH_LIST_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="watch_list__series"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide v-for="series in watchList" :key="series.id">
        <SeriesCard key="1" :series="series" :isCompact="true" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { WATCH_LIST_AUTOPLAY_DURATION } from "../../../utils/constants";
import { SeriesCard } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SeriesCard,
  },
  setup() {
    const swiper = ref(null);
    const store = useStore();

    const watchList = computed(() => {
      return store.state.watchList;
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
      WATCH_LIST_AUTOPLAY_DURATION,
      watchList,
    };
  },
};
</script>

<style lang="scss">
.watch_list {
  padding-top: 80px;

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
}
</style>
