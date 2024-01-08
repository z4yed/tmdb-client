<template>
  <div class="hero">
    <div class="hero__background">
      <img :src="seriesBanner" alt="hero image" class="hero__background-img" />
    </div>
    <div class="hero__description" v-if="!isDetailsPage">
      <div class="hero__description-season">
        <span>{{ series.adult ? "Adult" : "All ages" }}</span>
      </div>
      <div class="hero__description-title">
        <h2>
          {{ series.name }}
        </h2>
      </div>
      <div class="hero__description-others">
        <span> {{ isDetailsPage ? genresForDetailsPage : genres }}</span>
      </div>
      <div class="hero__description-details">
        <p>
          {{ series.overview }}
        </p>
      </div>
      <div class="hero__description-actions">
        <Button imageSource="play.png" text="Play Now" />
        <Button imageSource="play.png" text="Watch Trailer" />
        <Button imageSource="bookmark.png" text="Add Watchlist" />
      </div>
    </div>

    <div class="hero__description" v-if="isDetailsPage">
      <div class="hero__description-season">
        <span>{{ series.adult ? "Adult" : "All ages" }}</span>
      </div>
      <div class="hero__description-title">
        <h2>{{ series.name }}</h2>
      </div>
      <div class="hero__description-others">
        <span> {{ genresForDetailsPage() }}</span>
      </div>
      <div class="hero__description-actions" v-if="!isDetailsPage">
        <Button imageSource="play.png" text="Play Now" />
        <Button imageSource="play.png" text="Watch Trailer" />
        <Button
          :imageSource="isInWatchList ? 'bookmark_fill.svg' : 'bookmark.svg'"
          :text="isInWatchList ? 'Remove Watchlist' : 'Add Watchlist'"
          @click="modifyWatchList(isInWatchList ? false : true)"
          :key="series.id"
        />
      </div>

      <div class="hero__description-actions__details" v-if="isDetailsPage">
        <div>
          <Button imageSource="play.png" text="Continue Watching" />
          <Button
            :imageSource="isInWatchList ? 'bookmark_fill.svg' : 'bookmark.svg'"
            :text="isInWatchList ? 'Remove Watchlist' : 'Add Watchlist'"
            @click="modifyWatchList(isInWatchList ? false : true)"
          />
        </div>
        <div>
          <Button imageSource="download.png" text="Download" />
          <Button imageSource="share.png" text="Share" />
          <Button
            :imageSource="isFavorite ? 'heart_red.svg' : 'heart.svg'"
            text="Like"
            @click="modifyFavoritesList(isFavorite ? false : true)"
          />
        </div>
      </div>
    </div>

    <div class="hero__overlay" @click="navigateToDetails(series.id)"></div>
  </div>
</template>

<script>
import { Button } from "../../molecules";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    series: {
      type: Object,
      required: false,
    },
    isDetailsPage: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const { series, isDetailsPage } = props;

    const seriesBanner =
      process.env.VUE_APP_TMDB_FILES_BASE_PATH + series?.backdrop_path;

    const navigateToDetails = (seriesId) => {
      if (!isDetailsPage) {
        router.push({
          name: "SeriesDetails",
          params: { id: seriesId },
        });
      }
    };

    const authUser = computed(() => {
      return store.state.user;
    });

    const favoriteSeriesList = computed(() => {
      return store.getters.getFavoriteSeriesIds;
    });

    const isFavorite = computed(() => {
      return store.getters.isSeriesAlreadyFavorite(series.id);
    });

    const modifyFavoritesList = (status) => {
      store.dispatch("modifyFavorites", { series, status });
    };

    const isInWatchList = computed(() => {
      return store.getters.isSeriesAlreadyInWatchList(series.id);
    });

    const modifyWatchList = (status) => {
      store.dispatch("modifyWatchList", { series, status });
    };

    const genres = computed(() => {
      if (!isDetailsPage) {
        const seriesGenres = store.getters.getGenresByIds(
          series.genre_ids ?? []
        );
        return seriesGenres.join(" • ");
      }
    });

    const genresForDetailsPage = () => {
      if (isDetailsPage) {
        const output = [
          series.number_of_seasons + " Seasons",
          series.number_of_episodes + " Episodes",
          ...series.genres.map((genre) => genre.name),
        ];
        return output.map((value) => value).join(" • ");
      }
    };

    return {
      router,
      series,
      navigateToDetails,
      seriesBanner,
      authUser,
      genres,
      genresForDetailsPage,
      favoriteSeriesList,
      modifyFavoritesList,
      isFavorite,
      modifyWatchList,
      isInWatchList,
    };
  },
};
</script>

<style lang="scss">
.hero {
  max-width: 100vw;
  overflow: hidden;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;

  &__background {
    position: absolute;
    z-index: 1;

    &-img {
      width: 100vw;
      height: 648px;
      object-fit: cover;
    }
  }

  &__description {
    position: absolute;
    left: 75px;
    bottom: 64px;
    right: 0;
    z-index: 3;

    &-season {
      span {
        border-radius: 16px;
        background: $color-black-800;
        padding: 4px 16px;

        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 183.333% */
        letter-spacing: 0.06px;
      }
    }

    &-title {
      margin-top: 28px;
      h2 {
        font-feature-settings: "clig" off, "liga" off;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 125% */
      }
    }

    &-others {
      margin-top: 8px;
      span {
        color: $color-gray;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
      }
    }

    &-details {
      overflow: hidden;
      margin-top: 8px;

      p {
        text-overflow: ellipsis;
        max-width: 500px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
    }

    &-actions {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &-actions__details {
      padding-right: 75px;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        gap: 16px;
        align-items: center;
      }
    }
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: 100%;
    cursor: pointer;

    background: linear-gradient(
      359deg,
      #0d0c0f 0.83%,
      rgba(13, 12, 15, 0.85) 28.55%,
      rgba(13, 12, 15, 0.26) 57.53%,
      rgba(13, 12, 15, 0.28) 70.66%,
      #0d0c0f 103.18%
    );
  }
}
</style>
