<template>
  <div class="movie_card" :class="isCompact ? 'compact' : ''">
    <div class="movie_card__thumbnail">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
        <img :src="movie_poster_path" alt="" @click="navigateToDetails" />
      </router-link>
    </div>
    <div class="movie_card__description">
      <div class="movie_card__description-title">
        {{ movie.original_title }}
      </div>
      <div class="movie_card__description-ratings">
        <Ratings :value="movie.vote_average" :genreTexts="[genres]" />
      </div>
    </div>
    <div v-if="isCompact == false" class="movie_card__favourite">
      <img src="../../../assets/images/icons/heart.svg" alt="" />
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
    movie: {
      type: Object,
      required: true,
    },
    isCompact: {
      type: Boolean,
      required: false,
    },
  },
  components: { Ratings },
  setup({ movie }) {
    const store = useStore();
    const router = useRouter();

    const movie_poster_path = `${process.env.VUE_APP_TMDB_FILES_BASE_PATH}${movie.poster_path}`;

    const genres = computed(() => {
      const movieGenres = store.getters.getGenresByIds(movie.genre_ids);
      return movieGenres.join(" • ");
    });

    return {
      movie_poster_path,
      genres,
      router,
    };
  },
};
</script>

<style lang="scss">
$root: ".movie_card";
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
}

.compact {
  height: unset;
  width: unset;

  #{$root}__thumbnail {
    position: unset;
    img {
      height: 183px;
      width: 280px;
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
