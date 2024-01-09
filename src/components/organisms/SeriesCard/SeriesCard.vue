<template>
  <div class="series_card" :class="isCompact ? 'compact' : ''">
    <div class="series_card__thumbnail">
      <router-link :to="{ name: 'SeriesDetails', params: { id: series.id } }">
        <img
          :src="series_poster_path"
          alt="poster"
          @click="navigateToDetails"
        />
      </router-link>
    </div>
    <div class="series_card__description">
      <div class="series_card__description-title">
        {{ series.name }}
      </div>
      <div class="series_card__description-ratings">
        <Ratings :value="series.vote_average" :genreTexts="[genres]" />
      </div>
    </div>
    <div v-if="isCompact == false" class="series_card__favourite">
      <img
        :src="
          isFavorite ? getImageUrl('heart_red.svg') : getImageUrl('heart.svg')
        "
        alt=""
        @click="modifyFavoritesList(isFavorite ? false : true)"
      />
    </div>
  </div>
</template>

<script>
import { Ratings } from "..";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    series: {
      type: Object,
      required: true,
    },
    isCompact: {
      type: Boolean,
      required: false,
    },
  },
  components: { Ratings },
  setup({ series }) {
    const store = useStore();
    const router = useRouter();

    const series_poster_path = `${process.env.VUE_APP_TMDB_FILES_BASE_PATH}${series.poster_path}`;

    const genres = computed(() => {
      const genres = store.getters.getGenresByIds(series.genre_ids ?? []);
      return genres.join(" • ").slice(0, 25);
    });

    const isFavorite = computed(() => {
      return store.getters.isSeriesAlreadyFavorite(series.id);
    });

    const modifyFavoritesList = (status) => {
      if (Boolean(store.state.user)) {
        store.dispatch("modifyFavorites", { series, status });
      } else {
        window.scroll(0, 0);
        store.commit("highLightLogin", true);
      }
    };

    const images = require.context(
      "../../../assets/images/icons",
      false,
      /\.(png|jpg|jpeg|gif|svg)$/
    );

    function getImageUrl(imageSource) {
      return images("./" + imageSource);
    }

    return {
      series_poster_path,
      genres,
      router,
      isFavorite,
      modifyFavoritesList,
      getImageUrl,
    };
  },
};
</script>

<style lang="scss">
$root: ".series_card";
#{$root} {
  width: 280px;
  height: 412px;
  position: relative;

  &__thumbnail {
    position: absolute;
    z-index: 1;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
      cursor: pointer;
    }
  }

  &__description {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    width: 280px;
    height: 116px;
    padding: 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
    z-index: 2;

    border-radius: 0px 0px 16px 16px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 78.02%);

    &-title {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px; /* 150% */
    }
  }

  &__favourite {
    position: absolute;
    z-index: 4;
    top: 20px;
    right: 20px;

    img {
      cursor: pointer;
    }
  }

  @include respond-to("<medium") {
    width: 220px;
    height: 340px;
    position: relative;

    &__thumbnail {
      position: absolute;
      z-index: 1;
      height: 100%;

      img {
        width: 220px;
        height: 340px;
        object-fit: cover;
        border-radius: 16px;
        cursor: pointer;
      }
    }

    &__description {
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 0;

      display: flex;
      width: 280px;
      height: 116px;
      padding: 20px;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 4px;
      z-index: 2;

      border-radius: 0px 0px 16px 16px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 78.02%);

      &-title {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
      }
    }

    &__favourite {
      position: absolute;
      z-index: 4;
      top: 20px;
      right: 20px;

      img {
        cursor: pointer;
      }
    }
  }
}

.compact {
  height: unset;
  width: unset;

  #{$root}__thumbnail {
    position: unset;
    img {
      height: 183px;
      width: 280px;
      object-fit: fill;
    }
  }

  #{$root}__description {
    overflow: hidden;
    margin-top: 12px;
    position: unset;
    height: unset;
    width: unset;
    padding: 0;
  }
}
</style>
