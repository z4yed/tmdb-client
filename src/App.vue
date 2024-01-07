<template>
  <div class="app__header">
    <Header />
  </div>
  <div class="app_content">
    <PopularMovies />
    <JustRelease />
    <WatchList />
    <Likes />
    <Action />
    <Footer />
  </div>
</template>

<script>
import { Button, MovieGenre } from "@/components/molecules";
import {
  PopularMovie,
  Ratings,
  MovieCard,
  Cast,
  Footer,
} from "@/components/organisms";

import {
  Header,
  PopularMovies,
  JustRelease,
  WatchList,
  Likes,
  Action,
} from "@/components/templates";

export default {
  components: {
    Header,

    Button,
    PopularMovie,
    MovieGenre,
    Ratings,
    MovieCard,
    Cast,
    PopularMovies,
    JustRelease,
    WatchList,
    Likes,
    Action,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

.app_content {
  color: $color-white-solid;
  background: $color-black-solid;
  padding-left: 75px;
}
</style>
