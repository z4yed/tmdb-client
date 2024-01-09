<template>
  <div class="just_release">
    <h2 class="just_release__title">Just Release</h2>
    <swiper
      @swiper="getRef"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="16"
      :loop="true"
      v-if="justReleases.length"
      :autoplay="{
        delay: JUST_RELEASE_AUTOPLAY_DURATION,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      class="just_release__series"
    >
      <div class="right_navigation">
        <img
          src="../../../assets/images/icons/arrow-right.png"
          alt="arrow right"
          @click="slideToNext"
        />
      </div>

      <swiper-slide v-for="series in justReleases" :key="series.id">
        <SeriesCard :series="series" :key="series.id" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { JUST_RELEASE_AUTOPLAY_DURATION } from "../../../utils/constants";
import { SeriesCard } from "@/components/organisms";

import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay } from "swiper/modules";
import makeApiCall from "../../../utils/apiClient";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SeriesCard,
  },
  setup() {
    const swiper = ref(null);
    const justReleases = ref([]);

    const fetchData = async () => {
      const justReleaseUrl =
        process.env.VUE_APP_TMDB_API_BASE_URL + "/tv/on_the_air";

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        const fetchedSeries = await makeApiCall(
          justReleaseUrl,
          "get",
          null,
          headers
        );
        justReleases.value = fetchedSeries.results;
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
      JUST_RELEASE_AUTOPLAY_DURATION,
      getRef,
      slideToNext,
      justReleases,
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

  @include respond-to("<medium") {
    padding-top: 30px;

    &__title {
      font-size: 22px;
    }

    &__series {
      margin-top: 18px;

      .swiper-slide {
        width: unset;
      }
    }

    .right_navigation {
      @extend .right_navigation;
      height: 340px;
    }
  }
}
</style>
