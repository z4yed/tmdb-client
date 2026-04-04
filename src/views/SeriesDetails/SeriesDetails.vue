<template>
  <div v-if="loading" class="details_loading">
    <div class="details_loading__spinner"></div>
  </div>
  <template v-else>
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
        </p>
      </div>
      <TopCasts :casts="casts" v-if="casts.length" />
      <Recommendation :seriesList="similarSeries" v-if="similarSeries.length" />
    </div>
  </template>
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
    const loading = ref(true);

    const fetchData = async () => {
      loading.value = true;

      const baseUrl = process.env.VUE_APP_TMDB_API_BASE_URL;
      const headers = {
        accept: "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_ACCESS_TOKEN}`,
      };

      try {
        const [seriesDetails, seriesCasts, recommendations] = await Promise.all([
          makeApiCall(`${baseUrl}/tv/${props.id}`, "get", null, headers),
          makeApiCall(`${baseUrl}/tv/${props.id}/credits`, "get", null, headers),
          makeApiCall(`${baseUrl}/tv/${props.id}/similar`, "get", null, headers),
        ]);

        series.value = seriesDetails;
        casts.value = seriesCasts.cast;
        similarSeries.value = recommendations.results;
      } catch (err) {
        router.push({ name: "Home" });
      } finally {
        loading.value = false;
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
      loading,
      series,
      casts,
      similarSeries,
    };
  },
};
</script>

<style lang="scss">
.details_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: $color-black-800;

  &__spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba($color-white-solid, 0.15);
    border-top-color: $color-white-solid;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.details_header {
  position: relative;
  height: 70vh;
  min-height: 500px;
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

@include respond-to("<medium") {
  .details_header {
    height: 70vh;
    min-height: 400px;
  }

  .details_content {
    padding-left: 20px;

    &__story {
      padding: 20px;
    }
  }
}
</style>
