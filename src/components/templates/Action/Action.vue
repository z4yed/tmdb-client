<template>
  <div class="action">
    <h2 class="action__title">Top Rated Series</h2>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      v-if="topRatedSeries.length"
      :autoplay="{
        delay: ACTION_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="action__series"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide v-for="series in topRatedSeries" :key="series.id">
        <SeriesCard :series="series" :key="series.id" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { ACTION_AUTOPLAY_DURATION } from "../../../utils/constants";
import { SeriesCard } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, onMounted } from "vue";
import makeApiCall from "../../../utils/apiClient";

// import required modules
import { Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SeriesCard,
  },
  setup() {
    const swiper = ref(null);
    const topRatedSeries = ref([]);

    const fetchData = async () => {
      const topRatedSeriesUrl =
        process.env.VUE_APP_TMDB_API_BASE_URL + "/tv/top_rated";

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        const fetchedSeries = await makeApiCall(
          topRatedSeriesUrl,
          "get",
          null,
          headers
        );
        topRatedSeries.value = fetchedSeries.results;
      } catch (err) {
        console.log(err);
      }
    };

    onMounted(fetchData);

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
      ACTION_AUTOPLAY_DURATION,
      topRatedSeries,
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

  &__series {
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
