<template>
  <div class="hero">
    <div class="hero__background">
      <img :src="movieBanner" alt="hero image" class="hero__background-img" />
    </div>
    <div class="hero__description" v-if="!isDetailsPage">
      <div class="hero__description-season">
        <span>{{ movie.adult ? "Adult" : "All ages" }}</span>
      </div>
      <div class="hero__description-title">
        <h2>{{ movie.original_title }}</h2>
      </div>
      <div class="hero__description-others">
        <span> {{ isDetailsPage ? genresForDetailsPage : genres }}</span>
      </div>
      <div class="hero__description-details">
        <p>
          {{ movie.overview }}
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
        <span>{{ movie.adult ? "Adult" : "All ages" }}</span>
      </div>
      <div class="hero__description-title">
        <h2>{{ movie.original_title }}</h2>
      </div>
      <div class="hero__description-others">
        <span> {{ genresForDetailsPage() }}</span>
      </div>
      <div class="hero__description-actions" v-if="!isDetailsPage">
        <Button imageSource="play.png" text="Play Now" />
        <Button imageSource="play.png" text="Watch Trailer" />
        <Button imageSource="bookmark.png" text="Add Watchlist" />
      </div>

      <div class="hero__description-actions__details" v-if="isDetailsPage">
        <div>
          <Button imageSource="play.png" text="Continue Watching" />
          <Button imageSource="bookmark.png" text="Add Watchlist" />
        </div>
        <div>
          <Button imageSource="download.png" text="Download" />
          <Button imageSource="share.png" text="Share" />
          <Button imageSource="heart.svg" text="Like" />
        </div>
      </div>
    </div>

    <div class="hero__overlay" @click="navigateToDetails(movie.id)"></div>
  </div>
</template>

<script>
import { Button } from "../../molecules";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    movie: {
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

    const { movie, isDetailsPage } = props;

    const movieBanner =
      process.env.VUE_APP_TMDB_FILES_BASE_PATH + movie?.backdrop_path;

    const navigateToDetails = (movieId) => {
      if (!isDetailsPage) {
        router.push({
          name: "MovieDetails",
          params: { id: movieId },
        });
      }
    };

    const authUser = computed(() => {
      return store.state.user;
    });

    const genres = computed(() => {
      if (!isDetailsPage) {
        const movieGenres = store.getters.getGenresByIds(movie.genre_ids ?? []);
        return movieGenres.join(" • ");
      }
    });

    const genresForDetailsPage = () => {
      if (isDetailsPage) {
        return movie.genres.map((genre) => genre.name).join(" • ");
      }
    };

    return {
      router,
      movie,
      navigateToDetails,
      movieBanner,
      authUser,
      genres,
      genresForDetailsPage,
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
