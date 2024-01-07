<template>
  <div class="header">
    <Navbar />

    <swiper :pagination="true" :modules="modules" class="wrapper">
      <swiper-slide>
        <Hero key="1" />
      </swiper-slide>
      <swiper-slide>
        <Hero key="2" />
      </swiper-slide>
    </swiper>

    <!-- <Hero /> -->
  </div>
</template>

<script>
import { Navbar, Hero } from "@/components/organisms";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Navbar,
    Hero,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
}

.wrapper {
  min-height: 648px;
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
