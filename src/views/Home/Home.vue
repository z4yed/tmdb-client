<template>
  <Header />
  <div class="home_content">
    <PopularMovies />
    <!-- <JustRelease /> -->
    <!-- <WatchList /> -->
    <!-- <Likes /> -->
    <!-- <Action /> -->
  </div>
</template>

<script>
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
    PopularMovies,
    JustRelease,
    WatchList,
    Likes,
    Action,
  },
};
</script>

<style lang="scss">
.home_content {
  color: $color-white-solid;
  background: $color-black-solid;
  padding-left: 75px;
}
</style>
