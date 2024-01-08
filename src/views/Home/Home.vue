<template>
  <Header />
  <div class="home_content">
    <PopularSeriesList />
    <JustRelease />
    <WatchList />
    <Likes />
    <Action />
  </div>
</template>

<script>
import {
  Header,
  PopularSeriesList,
  JustRelease,
  WatchList,
  Likes,
  Action,
} from "@/components/templates";
export default {
  components: {
    Header,
    PopularSeriesList,
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
