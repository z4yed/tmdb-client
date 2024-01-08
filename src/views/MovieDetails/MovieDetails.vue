<template>
  <div class="details_header">
    <Navbar />
    <Hero
      :isDetailsPage="true"
      :series="series"
      v-if="series"
      :key="series.id"
    />
  </div>
  <div class="details_content" v-if="series">
    <div class="details_content__story">
      <h2 class="">Story Line</h2>
      <p>
        {{ series.overview }}
        <!-- <span class="more"> More </span> -->
      </p>
    </div>
    <TopCasts :casts="casts" />
    <Recommendation :seriesList="similarSeries" />
  </div>
</template>
<script>
import { Navbar, Hero } from "@/components/organisms";
import { TopCasts, Recommendation } from "@/components/templates";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
import makeApiCall from "../../utils/apiClient";

export default {
  props: {
    id: {
      type: String,
    },
  },
  components: {
    Navbar,
    Hero,
    TopCasts,
    Recommendation,
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const series = ref(null);
    const casts = ref(null);
    const similarSeries = ref(null);

    const fetchData = async () => {
      const detailsUrl =
        process.env.VUE_APP_TMDB_API_BASE_URL + "/tv/" + props.id;

      const creditsUrl =
        process.env.VUE_APP_TMDB_API_BASE_URL + "/tv/" + props.id + "/credits";

      const recommendationMoviesUrl =
        process.env.VUE_APP_TMDB_API_BASE_URL + "/tv/" + props.id + "/similar";

      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        let seriesDetails = await makeApiCall(detailsUrl, "get", null, headers);
        let seriesCasts = await makeApiCall(creditsUrl, "get", null, headers);
        let recommendations = await makeApiCall(
          recommendationMoviesUrl,
          "get",
          null,
          headers
        );

        series.value = seriesDetails;
        casts.value = seriesCasts.cast;
        similarSeries.value = recommendations.results;
      } catch (err) {
        router.push({ name: "Home" });
      }
    };

    watch(
      () => route.params,
      () => {
        window.scrollTo(0, 0);
        fetchData();
      },
      { immediate: true }
    );

    onMounted(fetchData);

    return {
      series,
      casts,
      similarSeries,
    };
  },
};
</script>

<style lang="scss">
.details_header {
  position: relative;
  min-height: 648px;
}

.details_content {
  color: $color-white-solid;
  background: $color-black-solid;
  padding-left: 75px;

  &__story {
    padding: 0 75px;
    h2 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px; /* 144.444% */
      letter-spacing: 0.09px;
    }

    p {
      margin-top: 16px;
      color: $color-gray;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    .more {
      color: $color-green;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
