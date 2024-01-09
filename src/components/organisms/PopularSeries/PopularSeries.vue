<template>
  <div class="popular_series">
    <div class="popular_series__index">{{ index }}</div>
    <div class="popular_series__thumb">
      <router-link :to="{ name: 'SeriesDetails', params: { id: series.id } }">
        <img :src="poster_path" alt="" />
      </router-link>
    </div>
    <div class="popular_series__info">
      <div class="popular_series__info__tag">
        <span>{{ series.original_language }}</span>
      </div>
      <div class="popular_series__info__title">
        {{ series.name }}
      </div>
      <div class="popular_series__info__genres">
        <img src="../../../assets/images/popular/film.svg" alt="" />
        <Genre :items="[genres]" />
      </div>
      <div class="popular_series__info__ratings">
        <Ratings :value="series.vote_average" :genreTexts="[genres_min]" />
      </div>
    </div>
  </div>
</template>

<script>
import Genre from "@/components/molecules/Genre/Genre.vue";
import Ratings from "@/components/organisms/Ratings/Ratings.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    series: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    Genre,
    Ratings,
  },

  setup({ series }) {
    const store = useStore();
    const poster_path = `${process.env.VUE_APP_TMDB_FILES_BASE_PATH}${series.poster_path}`;

    const genres = computed(() => {
      const genres = store.getters.getGenresByIds(series.genre_ids ?? []);
      return genres.join(" • ").slice(0, 25);
    });

    const genres_min = computed(() => {
      const genres = store.getters.getGenresByIds(series.genre_ids ?? []);
      return genres.join(" • ").slice(0, 15);
    });

    return {
      poster_path,
      genres,
      genres_min,
    };
  },
};
</script>

<style lang="scss">
.popular_series {
  height: 134px;
  display: flex;
  align-items: center;
  gap: 12px;

  &__index {
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px; /* 133.333% */
    letter-spacing: 0.24px;
  }

  &__thumb {
    img {
      height: 134px;
      width: 107px;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  &__info {
    height: 100%;
    max-width: 181px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;

    &__tag {
      span {
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid $color-black-700;

        color: $color-gray;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.06px;
      }
    }

    &__title {
      font-family: Rubik;
      overflow: hidden;
      color: $color-white-solid;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }

    &__genres {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  @include respond-to("<medium") {
    height: 134px;
    gap: 8px;

    &__index {
      text-align: center;
      font-size: 36px;
    }

    &__info {
      height: 100%;
      max-width: 181px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;

      &__tag {
        span {
          padding: 2px 8px;
        }
      }

      &__title {
        font-family: Rubik;
        overflow: hidden;
        color: $color-white-solid;
        font-size: 14px;
        line-height: 16px;
      }

      &__genres {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
}
</style>
