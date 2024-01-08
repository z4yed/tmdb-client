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
      class="popular__movies"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide v-for="(series, index) in popularSeries" :key="series.id">
        <PopularSeries :series="series" :index="index + 1" />
      </swiper-slide>
    </Swiper>
  </div>
</template>
<script>
import { POPULAR_AUTOPLAY_DURATION } from "../../../utils/constants";
import { PopularSeries } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";

import { Autoplay } from "swiper/modules";
import makeApiCall from "../../../utils/apiClient";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PopularSeries,
  },

  setup() {
    const swiper = ref(null);
    const popularSeries = ref([]);

    const fetchData = async () => {
      const popularSeriesUrl =
        process.env.VUE_APP_TMDB_API_BASE_URL + "/tv/popular";

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        const fetchedSeries = await makeApiCall(
          popularSeriesUrl,
          "get",
          null,
          headers
        );
        popularSeries.value = fetchedSeries.results;
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
      modules: [Autoplay],
      POPULAR_AUTOPLAY_DURATION,
      getRef,
      slideToNext,
      popularSeries,
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
