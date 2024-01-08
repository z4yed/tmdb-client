<template>
  <div class="header">
    <Navbar />

    <swiper
      :pagination="{ clickable: true }"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: HERO_AUTOPLAY_DURATION,
        disableOnInteraction: false,
      }"
      class="wrapper"
    >
      <swiper-slide v-for="movie in nowPlayingMovies" :key="movie.id">
        <Hero :movie="movie" :key="movie.id" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navbar, Hero } from "@/components/organisms";

import { HERO_AUTOPLAY_DURATION } from "../../../utils/constants";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { onMounted, ref } from "vue";
import makeApiCall from "../../../utils/apiClient";

export default {
  components: {
    Navbar,
    Hero,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const nowPlayingMovies = ref([]);

    const fetchData = async () => {
      const movies_url =
        process.env.VUE_APP_TMDB_API_BASE_URL +
        "/trending/tv/day?language=en-US";

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        const fetchedMovies = await makeApiCall(
          movies_url,
          "get",
          null,
          headers
        );
        nowPlayingMovies.value = fetchedMovies.results;
      } catch (err) {
        router.push({ name: "Home" });
      }
    };

    onMounted(fetchData);

    return {
      modules: [Autoplay, Pagination],
      HERO_AUTOPLAY_DURATION,
      nowPlayingMovies,
    };
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  min-height: 648px;
}

.wrapper {
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  .swiper-wrapper {
    position: absolute;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 64px;
    text-align: right;
    padding-right: 64px;

    .swiper-pagination-bullet {
      background: $color-white-solid;
      opacity: 0.3;
    }
    .swiper-pagination-bullet-active {
      background: $color-white-solid;
      opacity: 1;
    }
  }
}
</style>
