<template>
  <div class="search">
    <Navbar :solidBg="true" />
    <div class="search__content">
      <div v-if="searchResult.length" class="search__results">
        <h3 class="search__results-title">Search results for: {{ keyword }}</h3>

        <div class="search__results-content">
          <div v-for="series in searchResult" :key="series.id">
            <SeriesCard :series="series" />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="search__empty">
          <h3 v-if="isFetching">Generating search results...</h3>
          <h3 v-if="searchResult.length === 0 && !isFetching">
            Nothing found!!
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, SeriesCard } from "@/components/organisms";

import { ref, onMounted, watch } from "vue";
import makeApiCall from "../../utils/apiClient";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";

export default {
  components: {
    Navbar,
    SeriesCard,
  },
  setup(props) {
    const searchResult = ref([]);
    const route = useRoute();
    const keyword = ref("");
    const isFetching = ref(true);

    keyword.value = route.query?.keyword;

    const fetchData = async (keyword) => {
      isFetching.value = true;
      const searchUrl = `${process.env.VUE_APP_TMDB_API_BASE_URL}/search/tv?query=${keyword}&language=en-US&page=1`;

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        let fetchedSearchResult = await makeApiCall(
          searchUrl,
          "get",
          null,
          headers
        );

        searchResult.value = fetchedSearchResult.results;
      } catch (err) {
        toast.info("Something went wrong");
      }
      isFetching.value = false;
    };

    onMounted(() => {
      if (keyword) {
        fetchData(keyword);
      }
    });

    watch(
      () => route.params,
      () => {
        window.scrollTo(0, 0);
        if (route.query?.keyword) {
          keyword.value = route.query?.keyword;
          fetchData(keyword.value);
        }
      },
      { immediate: true }
    );

    return {
      searchResult,
      keyword,
      isFetching,
    };
  },
};
</script>

<style lang="scss">
.search {
  min-height: 80vh;
  color: $color-white-solid;
  background: $color-black-solid;

  &__results {
    padding: 48px 75px;

    &-title {
      margin-top: 16px;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }

    &-content {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  &__empty {
    margin-top: 60px;
    h3 {
      font-size: 32px;
      text-align: center;
    }
  }

  @include respond-to("<medium") {
    &__results {
      padding: 30px 20px;

      &-title {
        margin-top: 16px;
        font-size: 20px;
      }

      &-content {
        margin-top: 24px;
        gap: 10px;
      }
    }

    &__empty {
      margin-top: 60px;
      h3 {
        font-size: 32px;
      }
    }
  }
}
</style>
