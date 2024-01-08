<template>
  <div class="popular_movie">
    <div class="popular_movie__index">{{ index }}</div>
    <div class="popular_movie__thumb">
      <img :src="poster_path" alt="" />
    </div>
    <div class="popular_movie__info">
      <div class="popular_movie__info__tag"><span>PG-13</span></div>
      <div class="popular_movie__info__title">
        {{ movie.original_title }}
      </div>
      <div class="popular_movie__info__genres">
        <img src="../../../assets/images/popular/film.svg" alt="" />
        <MovieGenre :items="[genres]" />
      </div>
      <div class="popular_movie__info__ratings">
        <Ratings :value="4.2" :genreTexts="['Movie']" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieGenre from "@/components/molecules/MovieGenre/MovieGenre.vue";
import Ratings from "@/components/organisms/Ratings/Ratings.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: {
    MovieGenre,
    Ratings,
  },

  setup({ movie }) {
    const store = useStore();
    const poster_path = `${process.env.VUE_APP_TMDB_FILES_BASE_PATH}${movie.poster_path}`;

    const genres = computed(() => {
      const movieGenres = store.getters.getGenresByIds(movie.genre_ids);
      return movieGenres.join(" • ").slice(0, 25);
    });

    return {
      poster_path,
      genres,
    };
  },
};
</script>

<style lang="scss">
.popular_movie {
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
      color: var(--White, #fff);
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
}
</style>
