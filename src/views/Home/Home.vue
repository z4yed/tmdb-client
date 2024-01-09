<template>
  <Header />
  <div class="home_content">
    <PopularSeriesList />
    <!-- <JustRelease /> -->
    <!-- <WatchList v-if="isLoggedIn" /> -->
    <!-- <Likes v-if="isLoggedIn" /> -->
    <!-- <Action /> -->
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
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    PopularSeriesList,
    JustRelease,
    WatchList,
    Likes,
    Action,
  },

  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => {
      return store.getters.isLoggedIn;
    });

    return {
      isLoggedIn,
    };
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
